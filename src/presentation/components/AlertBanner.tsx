import { useEffect } from "react";
import { color, radius, spacing } from "../theme";
import { Pressable, Text, View } from "react-native";
import { scheduleOnRN } from "react-native-worklets";
import AlertIcon from "../../assets/icons/AlertIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

export default ({ message = "", duration = 10000, isVisible = false, onClose = () => { } }) => {
    const opacity = useSharedValue(0);
    const insets = useSafeAreaInsets();
    const scale = useSharedValue(0.96);
    const translateY = useSharedValue(-160);
    const animatedStyle = useAnimatedStyle(
        () => ({
            opacity: opacity.value,
            transform: [
                { scale: scale.value },
                { translateY: translateY.value },
            ],
        })
    );
    const hide = () => {
        opacity.value = withTiming(0, { duration: 200 });
        scale.value = withTiming(0.96, { duration: 200 });
        translateY.value = withTiming(-160, { duration: 250 }, isFinished => {
            if (isFinished) {
                scheduleOnRN(onClose);
            }
        });
    };

    useEffect(
        () => {
            if (isVisible) {
                const timer = setTimeout(hide, duration);

                scale.value = withTiming(1, {
                    duration: 250,
                });
                opacity.value = withTiming(1, {
                    duration: 250,
                });
                translateY.value = withSpring(0, {
                    damping: 18,
                    stiffness: 180,
                });

                return () => clearTimeout(timer);
            }
        },
        [
            hide,
            isVisible,
        ]
    );

    return isVisible && (
        <Animated.View
            style={
                [
                    {
                        zIndex: 1000,
                        position: "absolute",
                        top: spacing.m + insets.top,
                        left: spacing.m + insets.left,
                        right: spacing.m + insets.right,
                    },
                    animatedStyle,
                ]
            }
        >

            <View
                style={
                    {
                        gap: spacing.s,
                        padding: spacing.s,
                        alignItems: "center",
                        flexDirection: "row",
                        borderRadius: radius.m,
                        backgroundColor: color.yellowTransparent80,
                    }
                }
            >
                <View
                    style={
                        {
                            width: 40,
                            height: 40,
                            alignItems: "center",
                            borderRadius: radius.s,
                            justifyContent: "center",
                            backgroundColor: color.whiteTransparent20,
                        }
                    }
                >
                    <AlertIcon
                        color={
                            color.white
                        }
                    />
                </View>

                <Text
                    style={
                        {
                            flex: 1,
                            color: color.white,
                        }
                    }
                >
                    {message}
                </Text>

                <Pressable
                    onPress={hide}
                    style={
                        {
                            alignSelf: "flex-start"
                        }
                    }
                >
                    <CloseIcon
                        color={
                            color.whiteTransparent60
                        }
                    />
                </Pressable>
            </View>
        </Animated.View>
    );
};
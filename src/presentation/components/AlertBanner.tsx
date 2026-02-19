import { useEffect } from "react";
import { color, radius, spacing } from "../theme";
import { scheduleOnRN } from "react-native-worklets";
import AlertIcon from "../../assets/icons/AlertIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
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
                    styles.container,
                    {
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
                    styles.body
                }
            >
                <View
                    style={
                        styles.alertIcon
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
                        styles.messageLabel
                    }
                >
                    {message}
                </Text>

                <TouchableOpacity
                    onPress={hide}
                    style={
                        styles.closeIcon
                    }
                >
                    <CloseIcon
                        color={
                            color.whiteTransparent60
                        }
                    />
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        zIndex: 1000,
        position: "absolute",
    },
    body: {
        gap: spacing.s,
        padding: spacing.s,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: radius.m,
        backgroundColor: color.yellowTransparent80,
    },
    alertIcon: {
        width: 40,
        height: 40,
        alignItems: "center",
        borderRadius: radius.s,
        justifyContent: "center",
        backgroundColor: color.whiteTransparent20,
    },
    closeIcon: {
        alignSelf: "flex-start",
    },
    messageLabel: {
        flex: 1,
        color: color.white,
    }
});
import { color, spacing } from "../theme";
import { StyleSheet } from "react-native";
import { BlurView } from "@react-native-community/blur";
import { forwardRef, PropsWithChildren, useCallback, useMemo, useState } from "react";
import BottomSheet, { BottomSheetBackdropProps, BottomSheetView } from "@gorhom/bottom-sheet";
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated";

export default forwardRef<BottomSheet, PropsWithChildren>(
    ({ children }, ref) => {
        const snapPoints = useMemo(
            () => ["50%"],
            []
        );
        const [shouldPassPointerEvents, setShouldPassPointerEvents] = useState(false);
        const onChangeBottomSheet = useCallback(
            (index: number) => setShouldPassPointerEvents(0 < index),
            [
                setShouldPassPointerEvents,
            ]
        );
        const BlurredBackdrop = useCallback(
            ({ style, animatedIndex }: BottomSheetBackdropProps) => {
                const animatedStyle = useAnimatedStyle(
                    () => ({
                        opacity: interpolate(animatedIndex.value, [0, 1], [0, 1], Extrapolation.CLAMP)
                    })
                );

                return (
                    <Animated.View
                        pointerEvents={
                            shouldPassPointerEvents ? "auto" : "none"
                        }
                        style={
                            [style, StyleSheet.absoluteFill, animatedStyle]
                        }
                    >
                        <BlurView
                            blurAmount={5}
                            blurType="dark"
                            style={
                                StyleSheet.absoluteFill
                            }
                            reducedTransparencyFallbackColor="black"
                        />
                    </Animated.View>
                )
            },
            [
                shouldPassPointerEvents,
            ]
        );

        return (
            <BottomSheet
                ref={ref}
                index={-1}
                snapPoints={
                    snapPoints
                }
                backdropComponent={
                    BlurredBackdrop
                }
                enablePanDownToClose
                handleIndicatorStyle={
                    styles.handle
                }
                onChange={
                    onChangeBottomSheet
                }
            >
                <BottomSheetView >
                    {
                        children
                    }
                </BottomSheetView>
            </BottomSheet>
        );
    }
);

const styles = StyleSheet.create({
    handle: {
        width: 34,
        height: 5,
        backgroundColor: color.midGrey,
    },
});
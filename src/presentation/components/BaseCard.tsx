import { isEqual } from "@ver0/deep-equal";
import { Shadow } from "react-native-shadow-2";
import { memo, PropsWithChildren } from "react";
import { color, radius, spacing } from "../theme";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

export default memo(
    ({ style, children }: PropsWithChildren & { style?: StyleProp<ViewStyle> }) => (
        <Shadow
            distance={6}
            endColor={
                color.white
            }
            startColor={
                color.softGrey
            }
            style={
                [styles.container, style]
            }
        >
            {
                children
            }
        </Shadow>
    ),
    isEqual
);

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        padding: spacing.m,
        borderRadius: radius.m,
        backgroundColor: color.white,
        /* не работает, а с elevation криво, пришлось ставить react-native-shadow-2
        boxShadow: [
            {
                offsetX: 0,
                offsetY: 0,
                blurRadius: 24,
                spreadDistance: 5,
                color: color.softGrey,
            },
        ],
        */
    },
});
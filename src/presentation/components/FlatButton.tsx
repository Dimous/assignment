import { memo } from "react";
import { isEqual } from "@ver0/deep-equal";
import { color, radius, spacing } from "../theme";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

export default memo(
    ({ label, style, labelStyle, onPress }: { label?: string, style?: StyleProp<ViewStyle>, labelStyle?: StyleProp<TextStyle>, onPress?: () => void }) => (
        <TouchableOpacity
            onPress={
                onPress
            }
            style={
                [styles.container, style]
            }
        >
            <Text
                style={
                    [styles.label, labelStyle]
                }
            >
                {label}
            </Text>
        </TouchableOpacity>
    ),
    isEqual
);

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: 500,
        color: color.white,
    },
    container: {
        padding: spacing.m,
        alignItems: "center",
        borderRadius: radius.m,
        backgroundColor: color.primary,
    },
});
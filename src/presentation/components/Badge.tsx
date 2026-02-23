import { memo } from "react";
import { isEqual } from "@ver0/deep-equal";
import { color, radius, spacing } from "../theme";
import { StyleSheet, Text, View } from "react-native";

export default memo(
    ({ label }: { label: string }) => (
        <View
            style={
                styles.container
            }
        >
            <Text
                style={
                    styles.label
                }
            >
                {label}
            </Text>
        </View>
    ),
    isEqual
);

const styles = StyleSheet.create({
    label: {
        fontSize: 12,
        fontWeight: 400,
        color: color.primary
    },
    container: {
        borderRadius: radius.xs,
        alignSelf: "flex-start",
        paddingHorizontal: spacing.s,
        paddingVertical: spacing.xs / 2,
        backgroundColor: color.secondary,
    }
});
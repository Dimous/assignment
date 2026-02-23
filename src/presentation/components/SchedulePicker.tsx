import FlatButton from "./FlatButton";
import { memo, useCallback } from "react";
import { isEqual } from "@ver0/deep-equal";
import BaseIconButton from "./BaseIconButton";
import { color, radius, spacing } from "../theme";
import { StyleSheet, Text, View } from "react-native";

export default memo(
    ({ selected, onToggle }: { selected: number[], onToggle: (selected: number[]) => void }) => (
        <View
            style={
                styles.container
            }
        >
            <View
                style={
                    styles.weekdays
                }
            >
                {
                    ["Пн", "Вт", "Ср", "Чт", "Пт", "Cб", "Вс"].map(
                        (item, index) => {
                            const isSelected = selected.includes(index);
                            const onPress = useCallback(
                                () => {
                                    onToggle(isSelected ? selected.filter((_, selectedIndex) => index !== selectedIndex) : [...selected, index]);
                                },
                                [
                                    index,
                                    selected,
                                    onToggle,
                                    isSelected,
                                ]
                            );

                            return (
                                <FlatButton
                                    key={item}
                                    label={item}
                                    onPress={
                                        onPress
                                    }
                                    style={
                                        [styles.button, isSelected && styles.selectedButton]
                                    }
                                    labelStyle={
                                        [styles.buttonLabel, isSelected && styles.selectedButtonLabel]
                                    }
                                />
                            );
                        }
                    )
                }
            </View>

            <View
                style={
                    styles.interval
                }
            >
                <Text
                    style={
                        styles.timeLabel
                    }
                >С</Text>

                <BaseIconButton
                    label="12:00"
                    style={
                        styles.timeButton
                    }
                    bodyStyle={
                        styles.timeButtonBody
                    }
                    labelStyle={
                        styles.timeButtonLabel
                    }
                />

                <Text
                    style={
                        styles.timeLabel
                    }
                >До</Text>

                <BaseIconButton
                    label="14:00"
                    style={
                        styles.timeButton
                    }
                    bodyStyle={
                        styles.timeButtonBody
                    }
                    labelStyle={
                        styles.timeButtonLabel
                    }
                />
            </View>
        </View>
    ),
    isEqual
);

const styles = StyleSheet.create({
    container: {
        gap: spacing.m,
    },
    weekdays: {
        padding: spacing.s,
        flexDirection: "row",
        borderRadius: radius.m,
        justifyContent: "space-evenly",
        backgroundColor: color.secondary,
    },
    interval: {
        gap: spacing.s,
        alignItems: "center",
        flexDirection: "row",
    },
    button: {
        borderRadius: radius.s,
        paddingVertical: spacing.s,
        backgroundColor: color.secondary,
        paddingHorizontal: spacing.s + 4,
    },
    buttonLabel: {
        color: color.primary,
    },
    selectedButton: {
        backgroundColor: color.primary,
    },
    selectedButtonLabel: {
        color: color.white,
    },
    timeLabel: {
        fontSize: 16,
        fontWeight: 500,
        color: color.hardGrey,
    },
    timeButton: {
        flex: 1,
    },
    timeButtonBody: {
        paddingVertical: spacing.m,
    },
    timeButtonLabel: {
        fontSize: 16,
        fontWeight: 500,
        color: color.primary,
    },
});
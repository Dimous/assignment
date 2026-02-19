import { JSX } from "react";
import { color, radius, spacing } from "../theme";
import LinearGradient from "react-native-linear-gradient";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";

export default ({ label = "", style = {}, labelStyle = {}, bodyStyle = {}, wrapperStyle = {}, borderColors = [color.secondary + "33", color.primary + "33"], onPress = () => { }, renderIcon = () => null }: { label?: string, style?: StyleProp<ViewStyle>, labelStyle?: StyleProp<TextStyle>, bodyStyle?: StyleProp<ViewStyle>, wrapperStyle?: StyleProp<ViewStyle>, borderColors?: string[], onPress?: () => void, renderIcon?: () => JSX.Element | null }) => (
    <TouchableOpacity
        onPress={
            onPress
        }
        style={style}
    >
        <LinearGradient
            end={
                { x: 0.5, y: 1 }
            }
            start={
                { x: 0.5, y: 0 }
            }
            style={
                styles.border
            }
            colors={
                borderColors
            }
        >
            <View
                style={
                    [styles.wrapper, wrapperStyle]
                }
            >
                <View
                    style={
                        [styles.body, bodyStyle]
                    }
                >
                    {
                        renderIcon()
                    }

                    {
                        label && <Text
                            style={
                                [styles.label, labelStyle]
                            }
                        >
                            {label}
                        </Text>
                    }
                </View>
            </View>
        </LinearGradient>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    label: {
        fontSize: 12,
        fontWeight: 500,
        color: color.black,
    },
    border: {
        padding: 1,
        borderRadius: radius.m,
    },
    body: {
        flex: 1,
        gap: spacing.xs,
        alignItems: "center",
        flexDirection: "column",
    },
    wrapper: {
        flex: 1,
        borderRadius: radius.m - 1,
        backgroundColor: color.secondary,
    },
});
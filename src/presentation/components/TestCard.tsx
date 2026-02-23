import Badge from "./Badge";
import BaseCard from "./BaseCard";
import FlatButton from "./FlatButton";
import { memo, useCallback } from "react";
import { color, spacing } from "../theme";
import { isEqual } from "@ver0/deep-equal";
import { Alert, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export default memo(
    ({ badges, title, description, style }: { badges?: string[], title?: string, description?: string, style?: StyleProp<ViewStyle> }) => {
        const onPressButton = useCallback(
            () => Alert.alert("нажали на кнопку"),
            []
        );

        return (
            <BaseCard
                style={
                    style
                }
            >
                <View
                    style={
                        styles.wrapper
                    }
                >
                    {
                        badges?.map(
                            label => <Badge
                                key={label}
                                label={label}
                            />
                        )
                    }

                    <Text
                        style={
                            styles.titleLabel
                        }
                    >
                        {title}
                    </Text>

                    <Text
                        style={
                            styles.descriptionLabel
                        }
                    >
                        {description}
                    </Text>

                    <FlatButton
                        label="Кнопка"
                        style={
                            styles.button
                        }
                        onPress={
                            onPressButton
                        }
                    />
                </View>
            </BaseCard>
        );
    },
    isEqual
);

const styles = StyleSheet.create({
    button: {
        marginVertical: spacing.m,
    },
    wrapper: {
        gap: spacing.xs / 2,
    },
    titleLabel: {
        fontSize: 18,
        fontWeight: 600,
        color: color.black,
    },
    descriptionLabel: {
        fontSize: 14,
        fontWeight: 400,
        color: color.hardGrey,
    },
});
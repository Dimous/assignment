import TestCard from "./TestCard";
import FlatButton from "./FlatButton";
import BottomSheet from "@gorhom/bottom-sheet";
import { forwardRef, useCallback } from "react";
import BaseBottomSheet from "./BaseBottomSheet";
import { color, radius, spacing } from "../theme";
import CloseIcon from "../../assets/icons/CloseIcon";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default forwardRef<BottomSheet>(
    (_, ref) => {
        const onPressClose = useCallback(
            () => {
                if ("function" !== typeof ref) {
                    ref?.current?.close();
                }
            },
            [
                ref,
            ]
        );
        const onPressTestButton = useCallback(
            () => Alert.alert("нажали на тестовую кнопку"),
            []
        );

        return (
            <BaseBottomSheet
                ref={ref}
            >
                <View
                    style={
                        styles.head
                    }
                >
                    <Text
                        style={
                            styles.title
                        }
                    >Всплывающее окошко</Text>

                    <TouchableOpacity
                        onPress={
                            onPressClose
                        }
                    >
                        <CloseIcon
                            size={24}
                            color={
                                color.midGrey
                            }
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={
                        styles.body
                    }
                >
                    <TestCard
                        style={
                            styles.card
                        }
                        badges={
                            ["тест"]
                        }
                        title="Тест"
                        description="Тестовые данные"
                    />

                    <FlatButton
                        style={
                            styles.button
                        }
                        labelStyle={
                            styles.buttonLabel
                        }
                        label="Тестовая кнопка"
                        onPress={
                            onPressTestButton
                        }
                    />
                </View>
            </BaseBottomSheet>
        );
    }
);

const styles = StyleSheet.create({
    card: {
        width: "100%",
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        color: color.black,
    },
    head: {
        paddingTop: 0,
        padding: spacing.m,
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: color.midGrey,
        justifyContent: "space-between",
    },
    body: {
        gap: spacing.m,
        padding: spacing.m,
    },
    buttonLabel: {
        fontSize: 12,
        color: color.primary,
    },
    button: {
        alignSelf: "center",
        borderRadius: radius.s,
        paddingVertical: spacing.s,
        paddingHorizontal: spacing.m,
        backgroundColor: color.secondary,
    },
});
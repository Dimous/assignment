import { color, spacing } from "../theme";
import ProfileButton from "../components/ProfileButton";
import SupportButton from "../components/SupportButton";
import LinearGradient from "react-native-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Alert, ScrollView, StyleSheet, View } from "react-native";

export default () => {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={
                [
                    {
                        flex: 1,
                    },
                    {
                        paddingTop: insets.top,
                        paddingLeft: insets.left,
                        paddingRight: insets.right,
                        paddingBottom: insets.bottom,
                    }
                ]
            }
        >
            <LinearGradient
                style={
                    {
                        ...StyleSheet.absoluteFill,
                        height: "45%",
                    }
                }
                colors={
                    [
                        color.headerLinearGradientStart, color.headerLinearGradientStop
                    ]
                }
            />

            <ScrollView
                contentContainerStyle={
                    {
                        paddingTop: 100,
                        padding: spacing.m,
                    }
                }
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={
                        {
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }
                    }
                >
                    <ProfileButton
                        name="Иван И."
                        onPress={
                            () => Alert.alert("переход в профиль")
                        }
                    />

                    <SupportButton
                        onPress={
                            () => Alert.alert("переход в справку")
                        }
                    />
                </View>
            </ScrollView>
        </View>
    );
};
import { color, spacing } from "../theme";
import ProfileButton from "../components/ProfileButton";
import SupportButton from "../components/SupportButton";
import LinearGradient from "react-native-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import ParkingCard from "../components/ParkingCard";

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
                        gap: spacing.m,
                        paddingTop: 90,
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

                <ParkingCard
                    till="20:00"
                    plate="X 125 BY 125"
                    duration="13 минут"
                    onPressPark={
                        () => Alert.alert("парковаться")
                    }
                    onPressScan={
                        () => Alert.alert("сканировать")
                    }
                    onPressGoToList={
                        () => Alert.alert("переход в список парковок")
                    }
                />
            </ScrollView>
        </View>
    );
};
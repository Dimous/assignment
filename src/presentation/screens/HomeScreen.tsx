import { useRef, useState } from "react";
import { color, spacing } from "../theme";
import NewsFeed from "../components/NewsFeed";
import BottomSheet from "@gorhom/bottom-sheet";
import { ERoutes } from "../navigation/ERoutes";
import ParkingCard from "../components/ParkingCard";
import ProfileButton from "../components/ProfileButton";
import SupportButton from "../components/SupportButton";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import TestBottomSheet from "../components/TestBottomSheet";
import { TNavigatorParamList } from "../navigation/TNavigatorParamList";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import BaseIconButton from "../components/BaseIconButton";
import SchedulePicker from "../components/SchedulePicker";

export default () => {
    const insets = useSafeAreaInsets();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [selectedDays, setSelectedDays] = useState<number[]>([]);
    const navigation = useNavigation<BottomTabNavigationProp<TNavigatorParamList, ERoutes.HOME>>();

    return (
        <View
            style={
                [
                    styles.container,
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
                    [styles.wrapper, StyleSheet.absoluteFill]
                }
                colors={
                    [
                        color.headerLinearGradientStart, color.headerLinearGradientStop
                    ]
                }
            />

            <ScrollView
                contentContainerStyle={
                    styles.body
                }
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={
                        styles.block1
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
                        () => navigation.navigate(ERoutes.PARKING_HISTORY)
                    }
                />

                <NewsFeed
                    style={
                        styles.block2
                    }
                    onPressGoToList={
                        () => Alert.alert("переход к списку новостей")
                    }
                    items={
                        [
                            {
                                id: "61070047-919a-4d92-858e-d4b3c202fdc9",
                                image: "https://cataas.com/cat?width=108&height=108",
                                time: new Date(),
                                title: "Дожди в Приморском крае усилились. Жители Приморья вынуждены проверять подвалы, а эта строка должна быть обрезана!",
                            },
                            {
                                id: "d5c7f413-91f8-43b5-94e9-e35f52316172",
                                image: "https://cataas.com/cat?width=108&height=108",
                                time: new Date(),
                                title: "Вторая новость...",
                            },
                            {
                                id: "1d67c207-f678-410c-933b-f5b6ec4d4867",
                                image: "https://cataas.com/cat?width=108&height=108",
                                time: new Date(),
                                title: "Третья новость...",
                            }
                        ]
                    }
                />

                <SchedulePicker
                    selected={
                        selectedDays
                    }
                    onToggle={
                        setSelectedDays
                    }
                />

                <BaseIconButton
                    label="Нажми на меня!"
                    bodyStyle={
                        styles.bottomSheetButton
                    }
                    labelStyle={
                        styles.bottomSheetButtonLabel
                    }
                    onPress={
                        () => bottomSheetRef.current?.expand()
                    }
                />
            </ScrollView>

            <TestBottomSheet
                ref={
                    bottomSheetRef
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        gap: spacing.m,
        paddingTop: 90,
        padding: spacing.m,
    },
    wrapper: {
        height: "45%",
    },
    block1: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    block2: {
        marginVertical: spacing.m,
    },
    bottomSheetButton: {
        paddingVertical: spacing.m,
    },
    bottomSheetButtonLabel: {
        fontSize: 16,
        color: color.primary,
    },
});
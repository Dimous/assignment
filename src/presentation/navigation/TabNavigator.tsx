import { ERoutes } from "./ERoutes";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import HomeIcon from "../../assets/icons/HomeIcon";
import ParkingIcon from "../../assets/icons/ParkingIcon";
import { type TNavigatorParamList } from "./TNavigatorParamList";
import ParkingHistoryScreen from "../screens/ParkingHistoryScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator<TNavigatorParamList>();

export default () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={
                {
                    headerShown: false,
                    sceneStyle: styles.scene,
                    tabBarStyle: StyleSheet.compose(
                        styles.tabBar,
                        {
                            marginBottom: insets.bottom,
                        }
                    ),
                }
            }
        >
            <Tab.Screen
                name={
                    ERoutes.HOME
                }
                component={
                    HomeScreen
                }
                options={
                    {
                        tabBarLabel: "Главная",
                        tabBarLabelStyle: styles.tabBarLabel,
                        tabBarIcon: ({ size, color }) => <HomeIcon size={size} color={color} />,
                    }
                }
            />
            <Tab.Screen
                name={
                    ERoutes.PARKING_HISTORY
                }
                component={
                    ParkingHistoryScreen
                }
                options={
                    {
                        tabBarLabel: "История парковок",
                        tabBarLabelStyle: styles.tabBarLabel,
                        tabBarIcon: ({ size, color }) => <ParkingIcon size={size} color={color} />,
                    }
                }
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarLabel: {
        marginTop: 3,
    },
    scene: {
        backgroundColor: "#ffffff",
    },
    tabBar: {
        height: 92,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 20,
        paddingTop: 10,
        shadowRadius: 20,
        borderTopWidth: 1,
        shadowOpacity: 0.2,
        shadowColor: "#000000",
        backgroundColor: "#ffffff",
    },
});
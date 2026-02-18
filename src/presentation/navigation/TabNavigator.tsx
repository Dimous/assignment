import { ERoutes } from "./ERoutes";
import HomeScreen from "../screens/HomeScreen";
import HomeIcon from "../../assets/icons/HomeIcon";
import ParkingIcon from "../../assets/icons/ParkingIcon";
import ParkingHistoryScreen from "../screens/ParkingHistoryScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
        screenOptions={
            {
                headerShown: false,
                sceneStyle: {
                    backgroundColor: "#ffffff",
                },
                tabBarStyle: {
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
                    tabBarLabelStyle: {
                        marginTop: 3,
                    },
                    tabBarLabel: "Главная",
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
                    tabBarLabelStyle: {
                        marginTop: 3,
                    },
                    tabBarLabel: "История парковок",
                    tabBarIcon: ({ size, color }) => <ParkingIcon size={size} color={color} />,
                }
            }
        />
    </Tab.Navigator>
);
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AlertBanner from "./presentation/components/AlertBanner";
import TabNavigator from "./presentation/navigation/TabNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default () => (
    <SafeAreaProvider >
        <GestureHandlerRootView >
            <StatusBar hidden />

            <NavigationContainer >
                <TabNavigator />
            </NavigationContainer>

            {/** тут должен быть читатель очереди сообщений, показывающий AlertBanner, а очередь должна передаваться через провайдер, оборачивающий NavigationContainer и читатель, но пока для демонстрации просто AlertBanner */}
            <AlertBanner isVisible duration={100_000_000} message="Участились случаи пожаров в Приморском крае" />
        </GestureHandlerRootView>
    </SafeAreaProvider>
);

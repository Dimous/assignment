import { color } from "../theme"
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
            <Text style={{ color: color.black }}>История парковок</Text>
        </View>
    );
};
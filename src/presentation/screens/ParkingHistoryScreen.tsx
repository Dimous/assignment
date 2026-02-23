import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default () => {
    const insets = useSafeAreaInsets();

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
            <Text >История парковок</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
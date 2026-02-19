import { radius, spacing, color } from "../theme";
import PersonIcon from "../../assets/icons/PersonIcon";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default ({ name = "", onPress = () => { } }) => (
    <TouchableOpacity
        onPress={
            onPress
        }
        style={
            styles.body
        }
    >
        <View
            style={
                styles.icon
            }
        >
            <PersonIcon
                color={
                    color.black
                }
            />
        </View>

        <Text
            style={
                styles.nameLabel
            }
        >
            {name}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    nameLabel: {
        fontSize: 16,
        fontWeight: 500,
        color: color.black,
        marginHorizontal: spacing.s,
    },
    icon: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: radius.round,
        backgroundColor: color.white,
    },
    body: {
        padding: spacing.s,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: radius.round,
        backgroundColor: color.whiteTransparent20,
    },
});
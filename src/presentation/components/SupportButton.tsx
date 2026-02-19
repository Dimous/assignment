import { radius, color } from "../theme";
import SupportIcon from "../../assets/icons/SupportIcon";
import { StyleSheet, TouchableOpacity } from "react-native";

export default ({ onPress = () => { } }) => (
    <TouchableOpacity
        onPress={
            onPress
        }
        style={
            styles.body
        }
    >
        <SupportIcon
            color={
                color.black
            }
        />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    body: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: radius.round,
        backgroundColor: color.whiteTransparent20,
    }
});
import { Pressable } from "react-native";
import { radius, color } from "../theme";
import SupportIcon from "../../assets/icons/SupportIcon";

export default ({ onPress = () => { } }) => (
    <Pressable
        onPress={
            onPress
        }
        style={
            {
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: radius.round,
                backgroundColor: color.whiteTransparent20,
            }
        }
    >
        <SupportIcon />
    </Pressable>
);
import { radius, spacing, color } from "../theme";
import { Pressable, Text, View } from "react-native";
import PersonIcon from "../../assets/icons/PersonIcon";

export default ({ name = "", onPress = () => { } }) => (
    <Pressable
        onPress={
            onPress
        }
        style={
            {
                padding: spacing.s,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: radius.round,
                backgroundColor: color.whiteTransparent20,
            }
        }
    >
        <View
            style={
                {
                    width: 40,
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: radius.round,
                    backgroundColor: color.white,
                }
            }
        >
            <PersonIcon />
        </View>

        <Text
            style={
                {
                    fontSize: 16,
                    fontWeight: 500,
                    marginHorizontal: spacing.s,
                }
            }
        >
            {name}
        </Text>
    </Pressable>
);
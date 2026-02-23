import { memo } from "react";
import { radius, color } from "../theme";
import { isEqual } from "@ver0/deep-equal";
import SupportIcon from "../../assets/icons/SupportIcon";
import { StyleSheet, TouchableOpacity } from "react-native";

export default memo(
    ({ onPress }: { onPress?: () => void }) => (
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
    ),
    isEqual
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
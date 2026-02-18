import { View } from "react-native";
import { radius, spacing } from "../theme";

/**
 * номер машины, время и колбеки передаются через аргументы
 */
export default () => (
    <View
        style={
            {
                borderRadius: radius.m,
                flexDirection: "column",
                paddingVertical: spacing.m,
                paddingHorizontal: spacing.s,
            }
        }
    >
        <View >{/** тут заголовок и шеврон (на шеврон навешивается колбек) */}</View>
        <View >{/** тут номер и время */}</View>
        <View >{/** тут две кнопки */}</View>
    </View>
);
import CarIcon from "../../assets/icons/CarIcon";
import { radius, spacing, color } from "../theme";
import GenericIconButton from "./GenericIconButton";
import ScanerIcon from "../../assets/icons/ScanerIcon";
import ChevronIcon from "../../assets/icons/ChevronIcon";
import ParkingIcon from "../../assets/icons/ParkingIcon";
import LinearGradient from "react-native-linear-gradient";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default ({ till = "", plate = "", duration = "", onPressPark = () => { }, onPressScan = () => { }, onPressGoToList = () => { } }) => (
    <LinearGradient
        style={
            styles.border
        }
        colors={
            [color.secondary + "33", color.primary + "33"]
        }
    >
        <View
            style={
                styles.wrapper
            }
        >
            <View
                style={
                    styles.block1
                }
            >
                <Text
                    style={
                        styles.titleLabel
                    }
                >Мои парковки</Text>

                <TouchableOpacity
                    onPress={
                        onPressGoToList
                    }
                >
                    <ChevronIcon
                        color={
                            color.hardGrey
                        }
                    />
                </TouchableOpacity>
            </View>

            <View
                style={
                    styles.block2
                }
            >
                <LinearGradient
                    end={
                        { x: 0, y: 0.5 }
                    }
                    start={
                        { x: 1, y: 0.5 }
                    }
                    colors={
                        [color.primary + "66", color.white + "09"]
                    }
                    style={
                        styles.plateBorder
                    }
                >
                    <LinearGradient
                        end={
                            { x: 0, y: 0.5 }
                        }
                        start={
                            { x: 1, y: 0.5 }
                        }
                        colors={
                            [color.secondaryPressed, color.secondary]
                        }
                        style={
                            styles.plateWrapper
                        }
                    >
                        <View
                            style={
                                styles.plateBody
                            }
                        >
                            <CarIcon
                                color={
                                    color.black
                                }
                            />

                            <Text
                                style={
                                    styles.plateLabel
                                }
                            >
                                {plate}
                            </Text>
                        </View>
                    </LinearGradient>
                </LinearGradient>

                <View
                    style={
                        styles.timerBody
                    }
                >
                    <Text
                        style={
                            styles.timerDurationLabel
                        }
                    >
                        {duration}
                    </Text>

                    <Text
                        style={
                            styles.timerTillLabel
                        }
                    >до {till}</Text>
                </View>
            </View>

            <View
                style={
                    styles.block3
                }
            >
                <GenericIconButton
                    style={
                        styles.button
                    }
                    bodyStyle={
                        styles.buttonBody
                    }
                    labelStyle={
                        styles.parkButtonLabel
                    }
                    wrapperStyle={
                        styles.parkButtonWrapper
                    }
                    borderColors={
                        [color.black, color.black]
                    }
                    label="Парковаться"
                    renderIcon={
                        () => <ParkingIcon
                            size={16}
                            color={
                                color.white
                            }
                        />
                    }
                    onPress={
                        onPressPark
                    }
                />

                <GenericIconButton
                    style={
                        styles.button
                    }
                    bodyStyle={
                        styles.buttonBody
                    }
                    label="Сканировать талон"
                    renderIcon={
                        () => <ScanerIcon />
                    }
                    onPress={
                        onPressScan
                    }
                />
            </View>
        </View>
    </LinearGradient>
);

const styles = StyleSheet.create({
    border: {
        padding: 1,
        borderRadius: radius.m,
    },
    wrapper: {
        gap: spacing.m,
        padding: spacing.m,
        flexDirection: "column",
        borderRadius: radius.m - 1,
        backgroundColor: color.white,
    },
    titleLabel: {
        fontSize: 18,
        fontWeight: 600,
    },
    block1: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    block2: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: radius.m,
        justifyContent: "space-between",
        backgroundColor: color.softGrey,
    },
    block3: {
        gap: spacing.s,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    plateBorder: {
        padding: 1,
        borderRadius: radius.m,
        alignSelf: "flex-start",
    },
    plateWrapper: {
        minHeight: 48,
        justifyContent: "center",
        borderRadius: radius.m - 1,
        paddingHorizontal: spacing.m,
    },
    plateBody: {
        gap: spacing.s,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: radius.m - 2,
    },
    plateLabel: {
        color: color.black,
    },
    timerBody: {
        alignItems: "center",
        flexDirection: "column",
        marginHorizontal: spacing.m,
    },
    timerDurationLabel: {
        fontSize: 12,
        fontWeight: 500,
        color: color.black,
    },
    timerTillLabel: {
        fontSize: 12,
        fontWeight: 400,
        color: color.hardGrey,
    },
    button: {
        flex: 1,
    },
    buttonBody: {
        paddingVertical: spacing.s + 4,
    },
    parkButtonLabel: {
        color: color.white,
    },
    parkButtonWrapper: {
        backgroundColor: color.black,
    },
});
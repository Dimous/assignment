import { memo } from "react";
import { isEqual } from "@ver0/deep-equal";
import "@formatjs/intl-locale/polyfill.js";
import "@formatjs/intl-pluralrules/polyfill.js";
import "@formatjs/intl-numberformat/polyfill.js";
import "@formatjs/intl-displaynames/polyfill.js";
import { color, radius, spacing } from "../theme";
import { type TNewsItem } from "./types/TNewsItem";
import "@formatjs/intl-datetimeformat/polyfill.js";
import "@formatjs/intl-pluralrules/locale-data/ru.js";
import "@formatjs/intl-numberformat/locale-data/ru.js";
import "@formatjs/intl-relativetimeformat/polyfill.js";
import "@formatjs/intl-getcanonicallocales/polyfill.js";
import "@formatjs/intl-datetimeformat/locale-data/ru.js";
import { Image, StyleSheet, Text, View } from "react-native";
import "@formatjs/intl-relativetimeformat/locale-data/ru.js";

export default memo(
    ({ item }: { item: TNewsItem }) => (
        <View // тут должна быть кнопка с маршутизацией на экран просмотра новости, но непонятно как поведёт себя карусель
            style={
                styles.container
            }
        >
            <View
                style={
                    styles.body
                }
            >
                <View
                    style={
                        styles.text
                    }
                >
                    <Text
                        style={
                            styles.timeLabel
                        }
                    >
                        {
                            formatRelativeTime(item.time)
                        }
                    </Text>

                    <Text
                        style={
                            styles.titleLabel
                        }
                        numberOfLines={3}
                        ellipsizeMode="tail"
                    >
                        {
                            item.title
                        }
                    </Text>
                </View>

                <Image
                    style={
                        styles.image
                    }
                    source={
                        {
                            width: 108,
                            height: 108,
                            uri: item.image,
                        }
                    }
                />
            </View>
        </View>
    ),
    isEqual
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        gap: spacing.s,
        flexDirection: "row",
    },
    text: {
        flex: 1,
        marginTop: 35,
        gap: spacing.xs,
    },
    timeLabel: {
        fontSize: 10,
        fontWeight: 400,
        color: color.hardGrey,
    },
    titleLabel: {
        fontSize: 12,
        fontWeight: 500,
        color: color.black,
    },
    image: {
        width: 108,
        height: 108,
        borderRadius: radius.m,
    },
});

const formatter = new Intl.RelativeTimeFormat("ru", { numeric: "auto" });

const intervals = [{ label: "year", seconds: 31536000 }, { label: "month", seconds: 2592000 }, { label: "day", seconds: 86400 }, { label: "hour", seconds: 3600 }, { label: "minute", seconds: 60 }, { label: "second", seconds: 1 }] as const;

const formatRelativeTime = (date: Date) => {
    const seconds = Math.floor(
        (Date.now() - new Date(date).getTime()) / 1000
    );

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);

        if (1 <= count) {
            return formatter.format(-count, interval.label);
        }
    }

    return "только что";
};
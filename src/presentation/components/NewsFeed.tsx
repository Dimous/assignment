import NewsItem from "./NewsItem";
import { memo, useRef } from "react";
import { isEqual } from "@ver0/deep-equal";
import { color, radius, spacing } from "../theme";
import { type TNewsItem } from "./types/TNewsItem";
import LinkIcon from "../../assets/icons/LinkIcon";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

export default memo(
    ({ items, style, onPressGoToList }: { items: TNewsItem[], style?: StyleProp<ViewStyle>, onPressGoToList?: () => void }) => {
        const progress = useSharedValue<number>(0);
        const ref = useRef<ICarouselInstance>(null);
        const onPressPagination = (index: number) => {
            ref.current?.scrollTo({
                animated: true,
                count: index - progress.value,
            });
        };

        return items.length && (
            <View
                style={
                    [styles.container, style]
                }
            >
                <TouchableOpacity
                    style={
                        styles.link
                    }
                    onPress={
                        onPressGoToList
                    }
                >
                    <Text
                        style={
                            styles.linkLabel
                        }
                    >Новости</Text>

                    <LinkIcon
                        color={
                            color.black
                        }
                    />
                </TouchableOpacity>

                <Carousel
                    ref={ref}
                    data={
                        items
                    }
                    style={
                        styles.carousel
                    }
                    onProgressChange={
                        progress
                    }
                    renderItem={
                        ({ item, index }) => (
                            <NewsItem
                                key={index}
                                item={item}
                            />
                        )
                    }
                />

                <Pagination.Basic
                    size={6}
                    data={
                        items
                    }
                    progress={
                        progress
                    }
                    onPress={
                        onPressPagination
                    }
                    dotStyle={
                        styles.paginationDot
                    }
                    containerStyle={
                        styles.paginationContainer
                    }
                    activeDotStyle={
                        styles.paginationActiveDot
                    }
                />
            </View>
        );
    },
    isEqual
);

const styles = StyleSheet.create({
    carousel: {
        minHeight: 105,
    },
    container: {
        flex: 1,
        position: "relative",
    },
    paginationContainer: {
        gap: spacing.xs,
    },
    paginationDot: {
        borderRadius: radius.round,
        backgroundColor: color.midGrey,
    },
    paginationActiveDot: {
        backgroundColor: color.hardGrey,
    },
    link: {
        zIndex: 1,
        gap: spacing.xs,
        position: "absolute",
        flexDirection: "row",
        alignItems: "baseline",
        borderRadius: radius.s,
        alignSelf: "flex-start",
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.s,
        backgroundColor: color.softGrey,
    },
    linkLabel: {
        fontSize: 12,
        fontWeight: 400,
        color: color.black,
    },
});
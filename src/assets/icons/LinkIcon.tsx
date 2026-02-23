import { memo } from "react";
import { isEqual } from "@ver0/deep-equal";
import Svg, { Path } from "react-native-svg";

export default memo(
    ({ size = 10, color = "#000" }: { size?: number, color?: string }) => (
        <Svg width={size} height={size} viewBox="0 0 10 10" fill="none">
            <Path d="M5.57035 1H8.99892M8.99892 1V4.42857M8.99892 1L4.42749 5.57143" stroke={color} strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M2.71429 1H2.14286C1.51167 1 1 1.51167 1 2.14286V7.85714C1 8.48833 1.51167 9 2.14286 9H7.85714C8.48833 9 9 8.48833 9 7.85714V7.28571" stroke={color} strokeWidth="1.06667" strokeLinecap="round" />
        </Svg>
    ),
    isEqual
);
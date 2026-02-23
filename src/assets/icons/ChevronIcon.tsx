import { memo } from "react";
import { isEqual } from "@ver0/deep-equal";
import Svg, { Path } from "react-native-svg";

export default memo(
    ({ size = 20, color = "#000" }: { size?: number, color?: string }) => (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
            <Path d="M7 4L13 10L7 16" stroke={color} strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    ),
    isEqual
);
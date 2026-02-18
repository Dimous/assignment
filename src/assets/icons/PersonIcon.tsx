import Svg, { Circle, Path } from "react-native-svg";

export default ({ size = 16, color = "#000" }) => (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <Circle cx="8" cy="4" r="4" fill={color} />
        <Path d="M1.33788 13.3206C1.99897 10.5269 4.77173 9 7.64258 9H8.35742C11.2283 9 14.001 10.5269 14.6621 13.3206C14.79 13.8611 14.8917 14.4268 14.9489 15.0016C15.0036 15.5512 14.5523 16 14 16H2C1.44772 16 0.996418 15.5512 1.0511 15.0016C1.1083 14.4268 1.20997 13.8611 1.33788 13.3206Z" fill={color} />
    </Svg>
);
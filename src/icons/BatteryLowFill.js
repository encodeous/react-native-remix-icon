import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBatteryLowFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m2 3v8h4V8zm16 1h2v6h-2z" />
  </Svg>
);
export default SvgBatteryLowFill;

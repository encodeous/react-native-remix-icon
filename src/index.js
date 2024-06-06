import React from "react";
import * as Icon from "./icons";
import { Text } from "react-native";

const RemixIcon = ({
  name = "remixicon-fill",
  color = "black",
  size = 24,
  ...props
}) => {
  name = name.startsWith("ri-") ? name.substring(3) : name;

  let iconComponentName = name
    .split("-")
    .map(s => s[0].toUpperCase() + s.substr(1))
    .join("");

  let c = iconComponentName[0]
  if (c >= '0' && c <= '9') {
    iconComponentName = "N" + iconComponentName
  }

  const Component = Icon[iconComponentName];

  return Component ? (
    <Component {...props} fill={color || "black"} width={size} height={size} />
  ) : (
    <Text>Invalid Icon Name</Text>
  );
};

export default RemixIcon;

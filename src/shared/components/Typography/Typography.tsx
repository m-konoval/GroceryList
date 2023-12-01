import React from "react";
import { TextProps } from "react-native";
import { TypographyText } from "./typographyStyle";

const Typography: React.FC<TextProps> = ({ children, ...props }) => {
  return <TypographyText {...props}>{children}</TypographyText>;
};

export default React.memo(Typography);

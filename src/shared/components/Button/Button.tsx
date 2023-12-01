import React from "react";
import { ButtonTouchable, LabelText, styles } from "./buttonStyle";
import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";

interface IButtonProps extends TouchableOpacityProps {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  fullWidth?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  onPress,
  label,
  labelStyle,
  fullWidth,
  style = {},
  ...props
}) => {
  const styleOptions = [style, fullWidth && styles.fullWidth].filter(Boolean);

  return (
    <ButtonTouchable onPress={onPress} {...props} style={styleOptions}>
      <LabelText style={labelStyle}>{label}</LabelText>
    </ButtonTouchable>
  );
};

export default React.memo(Button);

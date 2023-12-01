import React from "react";
import {
  ContainerView,
  SelectWrapView,
  SelectTouchable,
  SelectText,
  LabelText,
  styles,
} from "./lineSelectorStyle";
import useLineSelector, { IUseLineSelector } from "./useLineSelector";
import { StyleProp, ViewStyle } from "react-native";
import { TVal } from "../../models/models";

interface LineSelectorProps extends IUseLineSelector {
  values: TVal[];
  label?: string;
  itemStyle?: StyleProp<ViewStyle>;
}

const LineSelector: React.FC<LineSelectorProps> = ({
  values = [],
  label,
  itemStyle,
  ...props
}) => {
  const { selected, onSelect } = useLineSelector(props);

  return (
    <ContainerView>
      {label && <LabelText>{label}</LabelText>}

      <SelectWrapView>
        {values.map((item, index) => {
          const selectStyle = [
            item === selected && styles.activeStyle,
            index === values?.length - 1 && styles.lastItemStyle,
            itemStyle,
          ].filter(Boolean);

          const textStyle = [
            item === selected && styles.activeTextStyle,
          ].filter(Boolean);

          return (
            <SelectTouchable
              key={item}
              onPress={() => onSelect(item)}
              style={selectStyle}
            >
              <SelectText style={textStyle}>{item}</SelectText>
            </SelectTouchable>
          );
        })}
      </SelectWrapView>
    </ContainerView>
  );
};

export default React.memo(LineSelector);

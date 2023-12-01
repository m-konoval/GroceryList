import styled from "@emotion/native";
import Typography from "../Typography";
import { StyleSheet } from "react-native";

export const ContainerView = styled.View`
  width: auto;
  align-self: flex-start;
`;

export const LabelText = styled(Typography)`
  font-size: 16px;
  line-height: 20px;
  color: #888;
`;

export const SelectWrapView = styled.View`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  overflow: hidden;
  align-self: flex-start;
  border: 1px solid #ccc;
  margin-top: 6px;
`;

export const SelectTouchable = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  min-width: 34px;
  height: 34px;
  border-right-width: 1px;
  border-right-color: #ccc;
`;

export const SelectText = styled(Typography)`
  font-size: 18px;
  line-height: 20px;
  color: #000;
`;

export const styles = StyleSheet.create({
  activeStyle: {
    backgroundColor: "#65c1ff",
  },
  activeTextStyle: {
    color: "#fff",
  },
  lastItemStyle: {
    borderRightWidth: 0,
  },
});

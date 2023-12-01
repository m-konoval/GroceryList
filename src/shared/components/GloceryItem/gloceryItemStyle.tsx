import styled from "@emotion/native";
import { StyleSheet } from "react-native";
import Typography from "../Typography";

export const ContainerView = styled.View`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 16px;
`;

export const MainTouchable = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 5px 16px;
`;

export const StatusTouchable = styled.TouchableOpacity`
  width: 30px;
  background-color: #54ce58;
  justify-content: center;
  align-items: center;
`;
export const RemoveTouchable = styled.TouchableOpacity`
  width: 30px;
  background-color: #f56b6b;
  justify-content: center;
  align-items: center;
`;

export const RowView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const SubText = styled(Typography)`
  font-size: 12px;
  line-height: 14px;
  color: #999;
`;

export const BoldText = styled(Typography)`
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
  color: #000;
`;

export const IconImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const styles = StyleSheet.create({
  warningStatusStyle: {
    backgroundColor: "#f7cc42",
  },
});

import styled from "@emotion/native";
import { StyleSheet } from "react-native";
import Typography from "../Typography";

export const ButtonTouchable = styled.TouchableOpacity`
  padding: 6px 24px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #65c1ff;
`;

export const LabelText = styled(Typography)`
  font-size: 16px;
  text-align: center;
  color: #fff;
`;

export const styles = StyleSheet.create({
  fullWidth: {
    width: "100%",
  },
});

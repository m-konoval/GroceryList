import styled from "@emotion/native";
import Typography from "../../shared/components/Typography";
import { StyleSheet } from "react-native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const ScreenView = styled.View`
  flex: 1;
  padding: 32px 24px 24px;
`;

export const HeadView = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  margin-bottom: 16px;
`;

export const ContentView = styled.View`
  flex: 1;
`;

export const TitleText = styled(Typography)`
  font-size: 18px;
  line-height: 22px;
  color: #333;
`;

export const SubText = styled(Typography)`
  font-size: 14px;
  line-height: 16px;
  color: #777;
`;

export const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 16,
  },
});

export const FormView = styled.View`
  display: flex;
  padding: 16px 0;
`;

export const RowView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #999;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const ErrorText = styled(Typography)`
  font-size: 14px;
  line-height: 18px;
  color: #b93e3e;
`;

import styled from "@emotion/native";
import Typography from "../../shared/components/Typography";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const ScreenView = styled.View`
  flex: 1;
  padding: 32px 24px 24px;
`;

export const ContentView = styled.View`
  flex: 1;
`;

export const TitleText = styled(Typography)`
  font-size: 18px;
  line-height: 22px;
  color: #333;
`;

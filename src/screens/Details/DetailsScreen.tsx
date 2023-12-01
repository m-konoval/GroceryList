import React from "react";
import { SafeArea, ScreenView, TitleText } from "./detailsScreenStyle";
import Button from "../../shared/components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

const DetailsScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <SafeArea>
      <ScreenView>
        <Button label="Back" onPress={() => navigation.goBack()} />

        <TitleText>Details Screen</TitleText>
      </ScreenView>
    </SafeArea>
  );
};

export default DetailsScreen;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "../../screens/List";
import DetailsScreen from "../../screens/Details";
import { EScreens } from "../../shared/constants/constants";

const Stack = createNativeStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={EScreens.List} component={ListScreen} />
        <Stack.Screen name={EScreens.Details} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

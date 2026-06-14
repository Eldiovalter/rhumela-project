import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RadarCargasScreen from "../features/driver/screens/RadarCargasScreen";
import DetalhesFreteScreen from "../features/driver/screens/DetalhesFreteScreen";
import ModoViagemScreen from "../features/driver/screens/ModoViagemScreen";
import ConfirmacaoPINScreen from "../features/driver/screens/ConfirmacaoPINScreen";
import CarteiraScreen from "../features/driver/screens/CarteiraScreen";

const Stack = createNativeStackNavigator();

export default function DriverNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Radar"
          component={RadarCargasScreen}
        />

        <Stack.Screen
          name="Detalhes"
          component={DetalhesFreteScreen}
        />

        <Stack.Screen
          name="Viagem"
          component={ModoViagemScreen}
        />

        <Stack.Screen
          name="PIN"
          component={ConfirmacaoPINScreen}
        />

        <Stack.Screen
          name="Carteira"
          component={CarteiraScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
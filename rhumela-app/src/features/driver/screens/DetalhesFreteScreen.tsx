import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useShipmentStore } from "../../../core/store/shipment.store";

import { COLORS } from "../../../core/theme/colors";

import { ROUTES } from "../../../shared/constants/routes";

export default function DetalhesFreteScreen() {
  const navigation = useNavigation<any>();

  const shipment = useShipmentStore(
    state => state.currentShipment
  );

  if (!shipment) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.background,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: 18,
          }}
        >
          Nenhuma carga selecionada.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20,
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: 30,
          fontWeight: "800",
        }}
      >
        Detalhes do Frete
      </Text>

      <View
        style={{
          marginTop: 24,
          backgroundColor: COLORS.surface,
          padding: 20,
          borderRadius: 18,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: 22,
            fontWeight: "700",
          }}
        >
          {shipment.tipo}
        </Text>

        <Text
          style={{
            color: COLORS.textSecondary,
            marginTop: 12,
          }}
        >
          Origem: {shipment.origem}
        </Text>

        <Text
          style={{
            color: COLORS.textSecondary,
            marginTop: 8,
          }}
        >
          Destino: {shipment.destino}
        </Text>

        <Text
          style={{
            color: COLORS.textSecondary,
            marginTop: 8,
          }}
        >
          Distância: {shipment.distancia}
        </Text>

        <Text
          style={{
            color: COLORS.textSecondary,
            marginTop: 8,
          }}
        >
          Peso: {shipment.peso}
        </Text>

        <Text
          style={{
            color: COLORS.primary,
            fontSize: 34,
            fontWeight: "900",
            marginTop: 20,
          }}
        >
          {shipment.valor}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(
            ROUTES.VIAGEM
          )
        }
        style={{
          backgroundColor: COLORS.primary,
          marginTop: 30,
          paddingVertical: 18,
          borderRadius: 16,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontWeight: "800",
            fontSize: 16,
          }}
        >
          IR RECOLHER
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
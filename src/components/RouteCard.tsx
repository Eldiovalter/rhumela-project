import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { COLORS } from "../core/theme/colors";

import { Shipment } from "../core/models/Shipment";

interface RouteCardProps {
  shipment: Shipment;
  onPress: () => void;
}

export default function RouteCard({
  shipment,
  onPress,
}: RouteCardProps) {
  return (
    <View
      style={{
        backgroundColor: COLORS.surface,
        borderRadius: 18,
        padding: 20,
        marginBottom: 18,
        borderWidth: 1,
        borderColor: COLORS.border,
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: 20,
          fontWeight: "700",
        }}
      >
        {shipment.tipo}
      </Text>

      <Text
        style={{
          color: COLORS.textSecondary,
          marginTop: 8,
        }}
      >
        {shipment.origem} ➜ {shipment.destino}
      </Text>

      <Text
        style={{
          color: COLORS.textSecondary,
          marginTop: 4,
        }}
      >
        Distância: {shipment.distancia}
      </Text>

      <Text
        style={{
          color: COLORS.textSecondary,
          marginTop: 4,
        }}
      >
        Peso: {shipment.peso}
      </Text>

      <Text
        style={{
          color: COLORS.primary,
          fontSize: 34,
          fontWeight: "900",
          marginTop: 16,
        }}
      >
        {shipment.valor}
      </Text>

      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: COLORS.primary,
          marginTop: 18,
          borderRadius: 14,
          paddingVertical: 18,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontWeight: "800",
          }}
        >
          ACEITAR FRETE
        </Text>
      </TouchableOpacity>
    </View>
  );
}
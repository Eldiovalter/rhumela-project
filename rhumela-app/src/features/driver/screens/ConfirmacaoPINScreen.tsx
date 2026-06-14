import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useShipmentStore } from "../../../core/store/shipment.store";
import { COLORS } from "../../../core/theme/colors";
import { ROUTES } from "../../../shared/constants/routes";

export default function ConfirmacaoPINScreen() {
  const navigation = useNavigation<any>();

  const shipment = useShipmentStore(
    state => state.currentShipment
  );

  const [pin, setPin] = useState("");

  function handleConfirm() {
    if (pin.length !== 4) {
      Alert.alert(
        "PIN inválido",
        "Introduza os 4 dígitos."
      );
      return;
    }

    navigation.navigate(
      ROUTES.CARTEIRA
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
        Confirmação Segura
      </Text>

      <Text
        style={{
          color: COLORS.textSecondary,
          marginTop: 10,
        }}
      >
        Introduza o PIN fornecido pelo cliente.
      </Text>

      {shipment && (
        <View
          style={{
            marginTop: 20,
            backgroundColor: COLORS.surface,
            padding: 16,
            borderRadius: 14,
          }}
        >
          <Text style={{ color: COLORS.white }}>
            Frete: {shipment.tipo}
          </Text>

          <Text
            style={{
              color: COLORS.primary,
              marginTop: 6,
              fontWeight: "700",
            }}
          >
            {shipment.valor}
          </Text>
        </View>
      )}

      <TextInput
        value={pin}
        onChangeText={setPin}
        maxLength={4}
        keyboardType="numeric"
        placeholder="0000"
        placeholderTextColor="#6B7280"
        style={{
          marginTop: 30,
          backgroundColor: COLORS.surface,
          color: COLORS.white,
          fontSize: 28,
          textAlign: "center",
          borderRadius: 16,
          paddingVertical: 20,
        }}
      />

      <TouchableOpacity
        onPress={handleConfirm}
        style={{
          backgroundColor: COLORS.primary,
          marginTop: 30,
          borderRadius: 16,
          paddingVertical: 18,
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
          CONFIRMAR ENTREGA
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
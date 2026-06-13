import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import HeaderBar from "../../../components/HeaderBar";
import RouteCard from "../../../components/RouteCard";
import LoadingOverlay from "../../../components/LoadingOverlay";

import { useShipments } from "../../../core/hooks/useShipments";

import { useShipmentStore } from "../../../core/store/shipment.store";

import { COLORS } from "../../../core/theme/colors";

import { ROUTES } from "../../../shared/constants/routes";

import { Shipment } from "../../../core/models/Shipment";

export default function RadarCargasScreen() {
  const navigation = useNavigation<any>();

  const { shipments, loading } =
    useShipments();

  const setCurrentShipment =
    useShipmentStore(
      state => state.setCurrentShipment
    );

  function handleSelectShipment(
    shipment: Shipment
  ) {
    setCurrentShipment(shipment);

    navigation.navigate(
      ROUTES.DETALHES,
      {
        carga: shipment,
      }
    );
  }

  if (loading) {
    return (
      <LoadingOverlay
        message="A carregar cargas..."
      />
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          COLORS.background,
      }}
    >
      <HeaderBar
        title="RHUMELA"
        subtitle="Radar de Cargas"
      />

      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            backgroundColor:
              COLORS.surface,
            borderRadius: 14,
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderWidth: 1,
            borderColor:
              COLORS.border,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontWeight: "600",
            }}
          >
            📍 Rota: Maputo ➜ Beira
          </Text>
        </View>
      </View>

      <FlatList
        data={shipments}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={
          false
        }
        renderItem={({ item }) => (
          <RouteCard
            shipment={item}
            onPress={() =>
              handleSelectShipment(item)
            }
          />
        )}
      />
    </SafeAreaView>
  );
}
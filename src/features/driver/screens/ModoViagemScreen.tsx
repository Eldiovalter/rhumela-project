import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function ModoViagemScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#111827",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#1F2937",
          margin: 20,
          borderRadius: 20,
          padding: 20,
        }}
      >
        <Text
          style={{
            color: "#22C55E",
            fontWeight: "700",
            fontSize: 16,
          }}
        >
          🟢 Cliente a rastrear
        </Text>

        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 30,
            fontWeight: "800",
            marginTop: 20,
          }}
        >
          Destino: Beira
        </Text>

        <Text
          style={{
            color: "#9CA3AF",
            marginTop: 12,
          }}
        >
          Última posição: Xai-Xai
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#FF5222",
          margin: 20,
          paddingVertical: 20,
          borderRadius: 16,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: "800",
            fontSize: 18,
          }}
        >
          CHEGUEI AO DESTINO
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
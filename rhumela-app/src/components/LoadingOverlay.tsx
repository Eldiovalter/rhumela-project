import React from "react";
import {
  ActivityIndicator,
  Text,
  View,
} from "react-native";

import { COLORS } from "../core/theme/colors";

interface LoadingOverlayProps {
  message?: string;
}

export default function LoadingOverlay({
  message = "A carregar...",
}: LoadingOverlayProps) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:
          COLORS.background,
      }}
    >
      <ActivityIndicator
        size="large"
        color={COLORS.primary}
      />

      <Text
        style={{
          color: COLORS.white,
          marginTop: 12,
        }}
      >
        {message}
      </Text>
    </View>
  );
}
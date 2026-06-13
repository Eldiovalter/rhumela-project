import React from "react";
import { View, Text } from "react-native";

import { COLORS } from "../core/theme/colors";

interface HeaderBarProps {
  title: string;
  subtitle?: string;
}

export default function HeaderBar({
  title,
  subtitle,
}: HeaderBarProps) {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: 32,
          fontWeight: "800",
        }}
      >
        {title}
      </Text>

      {subtitle && (
        <Text
          style={{
            color: COLORS.textSecondary,
            marginTop: 4,
          }}
        >
          {subtitle}
        </Text>
      )}
    </View>
  );
}
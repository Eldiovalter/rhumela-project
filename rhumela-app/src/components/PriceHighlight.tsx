import React from "react";
import { Text } from "react-native";

import { COLORS } from "../core/theme/colors";

interface PriceHighlightProps {
  value: string;
}

export default function PriceHighlight({
  value,
}: PriceHighlightProps) {
  return (
    <Text
      style={{
        color: COLORS.primary,
        fontSize: 34,
        fontWeight: "900",
        marginTop: 16,
      }}
    >
      {value}
    </Text>
  );
}
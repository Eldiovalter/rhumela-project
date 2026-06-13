import React, {
  useEffect,
  useState,
} from "react";

import {
  SafeAreaView,
  View,
  Text,
} from "react-native";

import { walletService }
from "../../../core/services/wallet.service";

import { COLORS }
from "../../../core/theme/colors";

export default function CarteiraScreen() {
  const [wallet, setWallet] =
    useState<any>(null);

  useEffect(() => {
    walletService
      .getWallet()
      .then(setWallet);
  }, []);

  if (!wallet) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor:
            COLORS.background,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.white,
          }}
        >
          A carregar carteira...
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          COLORS.background,
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
        Minha Carteira
      </Text>

      <View
        style={{
          backgroundColor:
            COLORS.surface,
          marginTop: 25,
          padding: 20,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            color:
              COLORS.textSecondary,
          }}
        >
          Saldo Disponível
        </Text>

        <Text
          style={{
            color: COLORS.primary,
            fontSize: 40,
            fontWeight: "900",
            marginTop: 10,
          }}
        >
          {wallet.saldo} MZN
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          backgroundColor:
            COLORS.surface,
          padding: 18,
          borderRadius: 16,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
          }}
        >
          Pendente: {wallet.pendente} MZN
        </Text>

        <Text
          style={{
            color: COLORS.white,
            marginTop: 10,
          }}
        >
          Total Recebido:
          {" "}
          {wallet.totalRecebido} MZN
        </Text>
      </View>
    </SafeAreaView>
  );
}
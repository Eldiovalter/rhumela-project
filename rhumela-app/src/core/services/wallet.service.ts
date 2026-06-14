export class WalletService {
  async getWallet() {
    return Promise.resolve({
      saldo: 4500,

      pendente: 1200,

      totalRecebido: 22000,
    });
  }
}

export const walletService =
  new WalletService();
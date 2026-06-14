export class DriverService {
  async getCurrentDriver() {
    return Promise.resolve({
      id: "1",

      nome: "Mateus Macamo",

      telefone: "84XXXXXXX",

      rating: 4.9,

      veiculo: "Toyota Hiace",
    });
  }
}

export const driverService =
  new DriverService();
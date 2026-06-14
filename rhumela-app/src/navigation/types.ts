export type ShipmentParams = {
  id: string;
  tipo: string;
  origem: string;
  destino: string;
  valor: string;
  distancia: string;
  peso: string;
};

export type DriverStackParamList = {
  Radar: undefined;

  Detalhes: {
    carga: ShipmentParams;
  };

  Viagem: {
    shipmentId: string;
  };

  PIN: {
    shipmentId: string;
  };

  Carteira: undefined;
};

export type ClientStackParamList = {
  NovoEnvio: undefined;

  Custodia: {
    shipmentId: string;
  };

  Tracking: {
    shipmentId: string;
  };

  Historico: undefined;
};
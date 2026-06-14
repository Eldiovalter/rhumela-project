import { SHIPMENTS } from "../mocks/shipments";

export class ShipmentService {
  async getAvailableShipments() {
    return Promise.resolve(SHIPMENTS);
  }

  async getShipmentById(id: string) {
    return Promise.resolve(
      SHIPMENTS.find(
        shipment => shipment.id === id
      )
    );
  }
}

export const shipmentService =
  new ShipmentService();
import { SHIPMENTS } from "../mocks/shipments";
import { Shipment } from "../models/Shipment";

export class ShipmentRepository {
  async findAll(): Promise<Shipment[]> {
    return SHIPMENTS;
  }

  async findById(
    id: string
  ): Promise<Shipment | undefined> {
    return SHIPMENTS.find(
      shipment => shipment.id === id
    );
  }
}

export const shipmentRepository =
  new ShipmentRepository();
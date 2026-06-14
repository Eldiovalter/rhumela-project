import { create } from "zustand";

import { Shipment }
from "../models/Shipment";

interface ShipmentStore {
  currentShipment: Shipment | null;

  setCurrentShipment: (
    shipment: Shipment
  ) => void;
}

export const useShipmentStore =
  create<ShipmentStore>((set) => ({
    currentShipment: null,

    setCurrentShipment: shipment =>
      set({
        currentShipment: shipment,
      }),
  }));
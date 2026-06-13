import { useState } from "react";
import { Shipment } from "../models/Shipment";

export function useCurrentShipment() {
  const [shipment, setShipment] =
    useState<Shipment | null>(null);

  return {
    shipment,
    setShipment,
  };
}
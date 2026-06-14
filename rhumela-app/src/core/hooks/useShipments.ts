import {
  useEffect,
  useState,
} from "react";

import {
  Shipment,
} from "../models/Shipment";

import {
  shipmentService,
} from "../services/shipment.service";

export function useShipments() {
  const [shipments, setShipments] =
    useState<Shipment[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    shipmentService
      .getAvailableShipments()
      .then(setShipments)
      .finally(() =>
        setLoading(false)
      );
  }, []);

  return {
    shipments,
    loading,
  };
}
import { EntryVehicle, Vehicle } from "./Vehicle";

export type SpotId = string;

export interface AllocationStrategy {
  alloc(vehicle: Vehicle): SpotId;
}

export class DefaultAllocation implements AllocationStrategy {
  alloc(vehicle: Vehicle): SpotId {
    return "Default allocation id";
  }
}

export class VipAllocation implements AllocationStrategy {
  alloc(vehicle: Vehicle): SpotId {
    return "VIP allocation id";
  }
}

export class AllocationContext {
  constructor(public strategy: AllocationStrategy) {}

  alloc(vehicle: Vehicle): SpotId {
    return this.strategy.alloc(vehicle);
  }
}

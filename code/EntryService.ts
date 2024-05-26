import { AllocationContext } from "./AllocationContext";
import { EntryVehicle, Vehicle, VehicleManager, VehicleSize } from "./Vehicle";

class EntryService {
  constructor(
    private allocator: AllocationContext,
    private vehicleManager: VehicleManager
  ) {}

  chechIn(vh: Vehicle): EntryVehicle {
    const time = new Date();
    const spot = this.allocator.alloc(vh);
    return this.vehicleManager.createEntyVehicle(vh, time, spot);
  }
}

export default EntryService;

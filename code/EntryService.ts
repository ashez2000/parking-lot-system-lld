import { AllocationService } from "./AllocationService";
import { EntryVehicle, VehicleSize } from "./Vehicle";

class EntryService {
  constructor(private allocator: AllocationService) {}

  chechIn(licencePlate: string, size: VehicleSize): EntryVehicle {
    const spotId = this.allocator.alloc(size);
    const vh = new EntryVehicle(licencePlate, size, new Date(), spotId);
    return vh;
  }
}

export default EntryService;

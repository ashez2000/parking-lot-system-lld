import { EntryVehicle } from "./Vehicle";

class FeeCalcService {
  constructor() {}

  // TODO: fee calc strategies
  calc(vehicle: EntryVehicle, exitTime: Date): number {
    return 0;
  }
}

export default FeeCalcService;

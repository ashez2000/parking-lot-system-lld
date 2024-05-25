import FeeCalcService from "./FeeCalcService";
import { EntryVehicle, ExitVehicle } from "./Vehicle";

class ExitService {
  constructor(private feeCalc: FeeCalcService) {}

  checkOut(entryVehicle: EntryVehicle): ExitVehicle {
    const exitTime = new Date();
    const fee = this.feeCalc.calc(entryVehicle, exitTime);
    return new ExitVehicle(entryVehicle, exitTime, fee);
  }
}

export default ExitService;

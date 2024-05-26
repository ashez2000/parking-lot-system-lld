import { FeeContext } from "./FeeContext";
import { Transaction } from "./Transaction";
import { EntryVehicle, VehicleManager } from "./Vehicle";

class ExitService {
  constructor(private vhManager: VehicleManager, private feeCalc: FeeContext) {}

  checkOut(entryVehicle: EntryVehicle): Transaction {
    const exitVh = this.vhManager.createExitVehicle(entryVehicle);
    const fee = this.feeCalc.calc(exitVh);
    return new Transaction(exitVh, fee);
  }
}

export default ExitService;

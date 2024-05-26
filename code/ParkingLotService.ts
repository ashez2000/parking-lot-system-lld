import { LoggerService } from "./LoggerService";
import { EntryVehicle, Vehicle } from "./Vehicle";
import EntryService from "./EntryService";
import ExitService from "./ExitService";
import { Transaction } from "./Transaction";

class ParkingLotService {
  constructor(
    private logger: LoggerService,
    private entryService: EntryService,
    private exitService: ExitService
  ) {}

  checkIn(vh: Vehicle): EntryVehicle {
    const entryVh = this.entryService.chechIn(vh);
    this.logger.log("Entry", entryVh);
    return entryVh;
  }

  checkOut(entry: EntryVehicle): Transaction {
    const t = this.exitService.checkOut(entry);
    this.logger.log("CheckOut", t);
    return t;
  }
}

export default ParkingLotService;

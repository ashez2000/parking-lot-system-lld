import { LoggerService } from "./LoggerService";
import { EntryVehicle, Vehicle } from "./Vehicle";
import EntryService from "./EntryService";

class ParkingLotService {
  constructor(
    private logger: LoggerService,
    private entryService: EntryService
  ) {}

  checkIn(vh: Vehicle): EntryVehicle {
    const entryVh = this.entryService.chechIn(vh);
    this.logger.log("Entry", entryVh);
    return entryVh;
  }
}

export default ParkingLotService;

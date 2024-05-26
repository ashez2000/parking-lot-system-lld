export enum VehicleSize {
  Small,
  Medium,
  Large,
}

export class Vehicle {
  constructor(public licencePlate: string, public size: VehicleSize) {}
}

export class EntryVehicle {
  constructor(
    public vehicle: Vehicle,
    public time: Date,
    public spotId: string
  ) {}
}

export class ExitVehicle {
  constructor(public entryVehicle: EntryVehicle, public exitTime: Date) {}
}

export class VehicleManager {
  createEntyVehicle(vh: Vehicle, time: Date, spotId: string) {
    return new EntryVehicle(vh, time, spotId);
  }

  createExitVehicle(vehicle: EntryVehicle) {
    return new ExitVehicle(vehicle, new Date());
  }
}

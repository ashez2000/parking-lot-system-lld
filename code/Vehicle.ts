export enum VehicleSize {
  Small,
  Medium,
  Large,
}

export class EntryVehicle {
  constructor(
    public licencePlate: string,
    public size: VehicleSize,
    public entryTime: Date,
    public spotId: string
  ) {}
}

export class ExitVehicle {
  constructor(
    public entryVehicle: EntryVehicle,
    public exitTime: Date,
    public fee: number
  ) {}
}

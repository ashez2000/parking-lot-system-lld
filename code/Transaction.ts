import { ExitVehicle } from "./Vehicle";

export class Transaction {
  constructor(public vh: ExitVehicle, public fee: number) {}
}

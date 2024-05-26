import { ExitVehicle } from "./Vehicle";

export interface FeeStrategy {
  calc(vh: ExitVehicle): number;
}

export class DefaultFeeCalc implements FeeStrategy {
  calc(vh: ExitVehicle): number {
    return 100;
  }
}

export class MemberFeeCalc implements FeeStrategy {
  calc(vh: ExitVehicle): number {
    return 80;
  }
}

export class FeeContext {
  constructor(public strategy: FeeStrategy) {}

  calc(vh: ExitVehicle): number {
    return this.strategy.calc(vh);
  }
}

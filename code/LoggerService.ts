export class LoggerService {
  constructor() {}
  log(msg: string, payload?: any) {
    console.log(msg, JSON.stringify(payload));
  }
}

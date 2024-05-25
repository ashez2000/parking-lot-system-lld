export enum NotificationType {
  Entry,
  Exit,
}

export class NotificationService {
  constructor() {}
  send(type: NotificationType, payload?: any) {}
}

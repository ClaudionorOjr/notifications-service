export class NotificationNotFound extends Error {
  constructor() {
    //? Chamar o constructor da classe Error
    super('Notification not found.');
  }
}

import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notificaions-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notificaion: Notification) {
    this.notifications.push(notificaion);
  }

  async findById(notificationId: string): Promise<Notification> {
    const notification = this.notifications.find(
      (notification) => notification.id === notificationId,
    );

    if (!notification) {
      return null;
    }

    return notification;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    //* Filter retornar mais de uma informação
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );
  }
}

import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { makeNotification } from '@test/factorys/notification-factory';

describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-01' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-01' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-02' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-id-01',
    });

    expect(count).toEqual(2);
  });
});

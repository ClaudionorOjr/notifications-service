import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factorys/notification-factory';
import { GetRecipientNotifications } from './get-recipient-notificatitons';

describe('Get recipients notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example-recipient-id-01',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-recipient-id-01' }),
        expect.objectContaining({ recipientId: 'example-recipient-id-01' }),
      ]),
    );
  });
});

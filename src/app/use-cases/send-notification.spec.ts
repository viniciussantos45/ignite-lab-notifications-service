import { SendNotification } from './send-notification';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';

describe('Send Notification', () => {
  it('Should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'Nova solicitação de amizade.',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});

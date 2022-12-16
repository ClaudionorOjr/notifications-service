import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationAttr,
} from '@application/entities/notification';

type Override = Partial<NotificationAttr>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'example-recipient-id-01',
    content: new Content('Nova solicitação de amizade.'),
    category: 'social',
    ...override,
  });
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { PrismaService } from '../../database/prisma.service';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return { notification };
  }
}

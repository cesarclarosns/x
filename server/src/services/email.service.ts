import {
  SESv2Client,
  SendEmailCommand,
  SendEmailCommandInput,
} from "@aws-sdk/client-sesv2";
import { config } from "../config/config";

class EmailService {
  client = new SESv2Client({
    region: "us-east-1",
    credentials: {
      secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
      accessKeyId: config.AWS_ACCESS_KEY_ID,
    },
  });

  constructor() {}

  async sendMail(command: SendEmailCommand) {
    this.client.send(command);
  }
}

export const emailService = new EmailService();

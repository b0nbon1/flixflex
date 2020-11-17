import twilio from 'twilio';
import config from '../config';
import logger from './winston';

const accountSid = config.twilioConfig.TWILIO_ACCOUNT_SID;
const authToken = config.twilioConfig.TWILIO_AUTH_TOKEN;
const senderNo = config.twilioConfig.TWILIO_PHONENUMBER;
const client = twilio(accountSid, authToken);

const message = (msg): void => {
  logger.info(msg.sid);
};

const messenger = async (to: string, body: string): Promise<void> => {
  await client.messages
    .create({
      body,
      from: senderNo,
      to
    })
    .then(message);
};

export default messenger;

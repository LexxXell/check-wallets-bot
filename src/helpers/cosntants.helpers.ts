import { existsSync } from 'fs';
import { Logger } from './logger.helper';
import { timeStringToMs } from '@lexxxell/timestring-to-ms';

const logger = new Logger('Constants');

let isError = false;

export const token = process.env.BOT_TOKEN as string;
export const chatId = process.env.CHAT_ID as string;
export const projectsWalletsFilepath = process.env.PROJECTS_WALLETS_FILEPATH as string;
export const loopPeriodMs = timeStringToMs(process.env.LOOP_PERIOD ?? '1h');

logger.info(`Loop period: ${process.env.LOOP_PERIOD ?? '1h'}`);

if (!token) {
  logger.error('BOT_TOKEN is not specified.');
  isError = true;
} else {
  logger.info(`BOT_TOKEN = xxx...${token.substring(token.length - 5)}`);
}

if (!chatId) {
  logger.error('CHAT_ID is not specified.');
  isError = true;
} else {
  logger.info(`CHAT_ID = ${chatId}`);
}

if (!projectsWalletsFilepath || !existsSync(projectsWalletsFilepath)) {
  logger.error('PROJECTS_WALLETS_FILEPATH is not specified, or there is no such file.');
  isError = true;
}

if (isError) {
  process.exit(0);
}

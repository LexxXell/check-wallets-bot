import { sendTelegramMessage } from '@lexxxell/send-telegram-message';
import { Logger, chatId, loopPeriodMs, prepareMessage, projectsWalletsFilepath, token } from './helpers';
import { ProjectBalanceData, checkWalletsOnUpdates } from '@owl352/get-wallets';
import { callbackScheduler } from '@lexxxell/callback-scheduler';

const logger = new Logger('MAIN');

async function checkLoop() {
  logger.log('Check of wallet balances of projects has been launched.');
  const res: ProjectBalanceData[] = await checkWalletsOnUpdates(projectsWalletsFilepath);
  if (res.length) {
    const message = prepareMessage(res);
    await sendTelegramMessage(message, chatId, token);
  }
  logger.log('Checking of the wallet balances of the projects has been completed.');
}

function main() {
  logger.log('The bot has been launched');
  callbackScheduler(checkLoop, loopPeriodMs, new Logger('checkLoop'));
}

if (require.main === module) {
  main();
}

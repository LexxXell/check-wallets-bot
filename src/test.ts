import { sendTelegramMessage } from '@lexxxell/send-telegram-message';
import { Logger, chatId, prepareMessage, token } from './helpers';
import { ProjectBalanceData, checkWalletsOnUpdates } from '@owl352/get-wallets';
import { callbackScheduler } from '@lexxxell/callback-scheduler';

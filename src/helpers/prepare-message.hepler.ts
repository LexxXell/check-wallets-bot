import { ProjectBalanceData } from '@owl352/get-wallets';

export function prepareMessage(input: ProjectBalanceData[]): string {
  let htmlString = '';
  input.forEach((obj) => {
    htmlString += `<b>Project:</b> ${obj.project}\n`;
    htmlString += `<b>Balance:</b> ${obj.balance}\n`;
    htmlString += obj.info ? `<b>Info:</b> ${obj.info}\n` : '';
    htmlString += `<b>Delta balance:</b> ${obj.balanceDelta}\n`;
    htmlString += `<b>Address:</b> <code>${obj.address}</code>\n`;
    htmlString += '========\n';
  });
  return htmlString;
}

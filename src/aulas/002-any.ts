import moment from 'moment';

function showMessage(msg: string) {
  return moment().format('DD/MM/YYYY HH:SS:MM') + ' - ' + msg;
}

console.log(showMessage('Teste de log.'));

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const os = require('os');

const availableCpus = os.cpus().length;
const cpus = availableCpus / 2;

const ra = 220012345;
const num = ra * 100;

let workers = [];
if (isMainThread) {
  for (let i = 0; i < cpus; i++) {
    const intervalo = { num: num, inicio: parseInt(num * i / cpus) + 1, fim: parseInt(num * (i + 1) / cpus) };
    workers[i] = new Worker(__filename, { workerData: intervalo });
    workers[i].on('message', function (message) {
      if (message.length) {
        message += ' ';
        const divisores = message.replaceAll(',', ' ');
        console.log(divisores);
      }
    });
  }
} else {
  if (!workerData)
    return;
  const result = function (workerData) {
    let divisores = [];
    if (workerData.fim === workerData.num) {
      divisores.push(workerData.num);
      return divisores;
    }
    for (let i = workerData.inicio; i <= workerData.fim; i++) {
      if (workerData.num % i == 0) {
        divisores.push(i);
      }
    }
    return divisores;
  }
  parentPort.postMessage(`${result(workerData)}`);
}

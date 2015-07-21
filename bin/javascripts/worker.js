var background = require('../../lib/background');
var appFunc = require('../../app');

function textingWorker() {
  // appFunc.workerApp();
  background();
}
// textingWorker();
module.exports = textingWorker;

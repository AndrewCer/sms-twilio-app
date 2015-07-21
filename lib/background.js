var appFunc = require('../app');
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

var runMe = function () {
  // appFunc.workerApp();
  var workerApp = function (req, res) {
    // add this to heroku scheduler!!!!!
    // $ node bin/javascripts/worker
    client.messages.create({
      to: '+' + process.env.PHONE_NUMBER,
      from: '+' + process.env.TWILIO_NUMBER,
      body: "Official Test!",
    }, function(err, message) {
      if (err) {
        console.log(err);
      }
      else {
      console.log(message);
      }
    });
    }
    workerApp()
}

module.exports = runMe;

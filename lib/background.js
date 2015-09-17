var appFunc = require('../app');
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

var runMe = function () {
  var workerApp = function (req, res) {
    // $ node bin/javascripts/worker
    //heroku scheduler ^
    client.messages.create({
      to: '+' + process.env.PHONE_NUMBER,
      from: '+' + process.env.TWILIO_NUMBER,
      body: "Hey! I just wanted to let you know that I love you and can't wait to see you. This app is going bye bye soon!",
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

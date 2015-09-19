var appFunc = require('../app');
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

var runMe = function () {
  var workerApp = function (req, res) {
    // $ node bin/javascripts/worker
    //heroku scheduler ^
    client.messages.create({
      to: '+' + process.env.PHONE_NUMBER,
      from: '+' + process.env.TWILIO_NUMBER,
      body: "T minus 1 more sleep and we get to see eachother! Woo! Ps This app is being deleted soon, like you deleted my love when you said to stop. JK I know the spam is real.",
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

var appFunc = require('../app');
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

var runMe = function () {
  var workerApp = function (req, res) {
    // $ node bin/javascripts/worker
    //heroku scheduler ^
    client.messages.create({
      to: '+' + process.env.PHONE_NUMBER,
      from: '+' + process.env.TWILIO_NUMBER,
      body: "I'm so glad you're hereeeeee! Now call your mom! This will be the last message. I just want you to know that I love you so so much. Kbye <3",
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

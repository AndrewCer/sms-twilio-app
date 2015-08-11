var appFunc = require('../app');
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

var runMe = function () {
  //in here run and call another function that texts other people, i.e. text myself to push!!!!
  var workerApp = function (req, res) {
    // add this to heroku scheduler!!!!!
    // $ node bin/javascripts/worker
    client.messages.create({
      to: '+' + process.env.PHONE_NUMBER,
      from: '+' + process.env.TWILIO_NUMBER,
      body: "Hey good lookin'! What's cookin'? Can you call your mom please? Here is her number " + process.env.M_NUMBER + " Kbye",
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

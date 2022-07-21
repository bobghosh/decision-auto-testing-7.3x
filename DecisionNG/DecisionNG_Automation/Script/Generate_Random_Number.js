function randomNumber(){
  var timestamp = new Date();
  return num = timestamp.getMilliseconds().toString() + timestamp.getHours().toString() + timestamp.getMinutes().toString();
  
}
Project.Variables.RandomNumber = randomNumber()
module.exports.randomNumber = randomNumber;
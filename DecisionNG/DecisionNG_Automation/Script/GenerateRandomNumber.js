function get4DigitRandomInt()
{
      var min = 1000, max = 9999;
      return Math.round(Math.random()*(max-min)+min);
}
module.exports.get4DigitRandomInt = get4DigitRandomInt;
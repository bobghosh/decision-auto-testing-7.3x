function SelectingTimeFromDropdown(option, flag)
{
  //Aliases.browser.pageSapiensDecision.form.form2.form4.button10.ClickButton();
  if(flag == "Yes")
  {
  Aliases.browser.pageSapiensDecision.form.form2.form4.button5.textnode5.Click();
  }
 
  var Time=Aliases.browser.pageSapiensDecision.FindElements("//div[@role='option']");
  Log.Message(Time.length)
  for(let i=0;i<=Time.length;i++)
  {
    var TimeText=Time[i].textContent;
    //Log.Message(TimeText)
    if(TimeText== option)
    {
      Time[i].click();
      break;
    }
 
  
  }
  
  }
  module.exports.SelectingTimeFromDropdown = SelectingTimeFromDropdown;
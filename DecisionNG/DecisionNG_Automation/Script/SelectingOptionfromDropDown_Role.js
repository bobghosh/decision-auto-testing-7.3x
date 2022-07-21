function SelectingOptionfromDropdown(option,flag)
{
  if(flag=="Yes")
  {
    Aliases.browser.pageSapiensDecision.form.form2.form4.button10.ClickButton();    
  }
    Delay(500)
    var Option=Aliases.browser.pageSapiensDecision.FindElements("//*[@role='option']");
    //Log.Message(Option.length)
      for(let i=0;i<Option.length;i++)
      {
        var Optiontext=Option[i].textContent.trim();
        //Log.Message(Optiontext)
        if(Optiontext == option.trim())
          {
            Option[i].Click();
            break;
          }
        
         if(i == (Option.length-1))
         {
           Log.Warning("Option doesn't exists/Wrong Input Data"); 
           Option[0].Click();
           break;
         }  
      }
  
  
 }
module.exports.SelectingOptionfromDropdown = SelectingOptionfromDropdown;
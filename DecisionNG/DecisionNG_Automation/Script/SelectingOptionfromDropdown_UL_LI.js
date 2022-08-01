function SelectingOptionfromDropdown(option,flag)
{

  if(flag=="Yes")
  {
    Aliases.browser.pageSapiensDecision.form.form2.form4.button10.ClickButton();    
  }
    var Option=Aliases.browser.pageSapiensDecision.FindElements("//ul//li");
    //Log.Message(Option.length)
      for(let i=0;i<Option.length;i++)
      {
        var Optiontext=Option[i].textContent;
        Log.Message("text present in the list "+Optiontext+ "and "+" testpresent in the input we provide "+option)
        if(Optiontext.trim() == option.trim())
          {
            Option[i].Click(2,2);
            break;
          }
        
         if(i == (Option.length-1))
         {
           Log.Error("Option doesn't exists/Wrong Input Data"); 
           Option[0].Click();
           break;
         }  
      }
  
  
 }

module.exports.SelectingOptionfromDropdown = SelectingOptionfromDropdown;
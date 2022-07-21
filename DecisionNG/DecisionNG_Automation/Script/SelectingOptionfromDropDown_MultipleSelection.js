function SelectingOptionfromDropdown_Multiselect(Input,flag)
{
  if(flag=="Yes")
  {
    Aliases.browser.pageSapiensDecision.form.form2.form4.button10.ClickButton();    
  }
   
    var arr1= Input.toString().split(","); 
    Log.Message(arr1.length)
    for(let j=0; j<arr1.length; j++)
    {
    var Option=Aliases.browser.pageSapiensDecision.FindElements("//*[@role='option']");
    //Log.Message(Option.length)
      for(let i=0;i<Option.length;i++)
      {
        var Optiontext=Option[i].textContent.trim();
        if(Optiontext == arr1[j])
          {
            Option[i].Click(15,5);
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
 }
module.exports.SelectingOptionfromDropdown_Multiselect = SelectingOptionfromDropdown_Multiselect;
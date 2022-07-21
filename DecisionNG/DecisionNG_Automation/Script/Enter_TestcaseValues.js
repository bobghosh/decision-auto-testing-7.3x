var SelectingTimeFromDropDown = require("SelectingTimeFromDropDown");
var SelectingOptionfromDropDown_MultipleSelection = require("SelectingOptionfromDropDown_MultipleSelection");
var SelectingDateFromCalendar = require("SelectingDateFromCalendar");
var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");

function Enter_TestcaseValues(FactTypeName_Values)
{
//  var FactTypeName_Values= "Mortgage Acceptable DTI Ratio-2,Mortgage LTV Percent-3"
  var FTName
  var placeHolder
  var page = Aliases.browser.pageSapiensDecision2;
  let factTypeNames = page.FindElements("//dcn-testing-view-model-list//fx-field//label");  
  
  Log.Message("Names:"+factTypeNames.length);
  FTName = FactTypeName_Values.split(',')
  for(let j=0; j< FTName.length; j++)
  {
    let ftValue= FTName[j].split('-')    
  for(let i=0;i<factTypeNames.length;i++)
  {
    let factTypeNamesText = factTypeNames[i].textContent.trim();
      
    if(factTypeNamesText == ftValue[0])
    {
      let factTypeValuefeild = page.FindElements("//dcn-testing-view-model-list//fx-field//div//span//input");
      let classText = factTypeValuefeild[i].getAttribute('class');
      placeHolder = factTypeValuefeild[i].getAttribute('placeholder');
      Log.Message(classText,placeHolder);
      
      if(classText == 'wj-form-control')
      {
        if(placeHolder == "M/d/yyyy" || placeHolder == "M/yyyy")
        {
          var dateMonthYear = ftValue[1].split('/')
          var date = dateMonthYear[0];
          var month = dateMonthYear[1];
          var year = dateMonthYear[2];
          
          page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button").Click();
          SelectingDateFromCalendar.CalendarSelection("No",year,month,date)
        }
        
        else if(placeHolder == "M/d/yyyy h:mm a")
        {
           page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button[1]").Click();
           SelectingDateFromCalendar.CalendarSelection('No','1999','Jan','12')
           page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button[2]").Click();
           SelectingTimeFromDropDown.SelectingTimeFromDropdown(ftValue[1],'No')
           
        }
        
        else if(placeHolder == "click to select")
        {
          page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button").Click();
          SelectingOptionfromDropDown_MultipleSelection.SelectingOptionfromDropdown_Multiselect(ftValue[1],'No')
          page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button").Click();
        }
        
        else
        {
          page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button").Click();
          SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(ftValue[1],"No");
        }
        
         
      }
      else
      {
        factTypeValuefeild[i].keys("^a[BS]");
        factTypeValuefeild[i].keys(ftValue[1]);
        factTypeValuefeild[i].keys(['Tab']);
      }
      break;     
    }
    
  }
  
  }
  
}

var Buttons_Actions = require("Buttons_Actions");
function verify_laundaryline_Draft()
{
  let page = Aliases.browser.pageSapiensDecision2
  
}

function selectRuleFamilyChangeVersion(MenuItem){
  
  aqUtils.Delay(1000)
  let page = Aliases.browser.pageSapiensDecision2
  let contextList = page.FindElements("//change-fact-or-rfv-version-dialog//*[contains(@class, 'radio-button-group__item__template')]") 
  
  //*[contains(text(), 'Tuition Fee Loan Eligibility__ (View: Auto_Add_Info) [V1.0]')]/parent::*/../parent::*/p-radiobutton/div
  var count = 0;
  for(let i=0;i<contextList.length;i++)
  {
    let menuText = contextList[i].textContent;
    if(menuText.trim() == MenuItem.trim())
    {
      contextList[i].Click();
      Log.Checkpoint(MenuItem+' was found in the list and clicked')
      count++;
      Buttons_Actions.okButtonClick();
      break;
    }
    
  }
  if(count==0)
    Log.Error('given option doesnot exists')
  
}
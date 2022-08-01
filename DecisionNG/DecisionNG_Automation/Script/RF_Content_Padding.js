//USEUNIT RefLibrary
var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");

function ContentPadding_SelectOption(option)
{
     let page = Aliases.browser.pageSapiensDecision2;
     page.WaitElement(ORRuleFamily.contentPaddingCell, 15000).ClickR();
     page.WaitElement("//p-contextmenusub", 15000)
     SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(option, 'No')
     
}

function VerifyRowIDonScreen(iCell){
  
  let page = Aliases.browser.pageSapiensDecision2;
  page.WaitElement(ORRuleFamily.contentPaddingCell, 15000);
      
  const rowIDXpath = page.WaitElement("//*[@wj-part='chcells']//*[contains(text(), 'Row ID')]");
  aqObject.CheckProperty(rowIDXpath, "innerText", cmpEqual, "Row ID", true)
  aqObject.CheckProperty(rowIDXpath, "VisibleOnScreen", cmpEqual, true , true)
  
  const rowIDcellXpath = page.WaitElement("(//*[contains(@class, 'wj-align-right')])["+iCell+"]");
  
  var hasNumber = /^[0-9]+$/;   
  Log.Message(hasNumber.test(rowIDcellXpath.innerText));
  Log.Message(parseInt(rowIDcellXpath.innerText))
  
  if(hasNumber.test(rowIDcellXpath.innerText) == true)
    Log.Checkpoint("given cell contains only numeric value")
  else
    Log.Error("given cell has non numeric values")
}

function VerifyShowSignonScreen(iCell){
  
  let page = Aliases.browser.pageSapiensDecision2;
  page.WaitElement(ORRuleFamily.contentPaddingCell, 15000);
      
  const signXpath = page.WaitElement("//*[@wj-part='chcells']//*[contains(text(), 'Sign')]")
  aqObject.CheckProperty(signXpath, "innerText", cmpEqual, "Sign", true)
  aqObject.CheckProperty(signXpath, "VisibleOnScreen", cmpEqual, true , true)
  
  iCell += 1
  const signcellXpath = page.WaitElement("(//*[contains(@class, 'wj-cell') and @aria-required='false'])["+iCell+"]");
  
  var onlyMixOfAlphaNumeric = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/;   
  Log.Message(onlyMixOfAlphaNumeric.test(signcellXpath.innerText));
  Log.Message(signcellXpath.innerText)
  
  if(onlyMixOfAlphaNumeric.test(signcellXpath.innerText) == true)
    Log.Checkpoint("given cell contains alphanumeric value")
  else
    Log.Error("given cell has symbolic values or is empty")
}
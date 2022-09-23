var Buttons_Actions = require("Buttons_Actions");
var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");
function Decision_Screen_ContextMenu_Select_Option(contextMenuItem,viewNametoSelect,verifyStatus,radioToSelect,defaultSelectRadio)
{
  let page = Aliases.browser.pageSapiensDecision
  let contextMenuList = page.FindElements("//ul//li//a")  
  for(let i=0;i<contextMenuList.length;i++)
  {
    let menuText = contextMenuList[i].textContent;
    if(menuText == contextMenuItem)
    {
      contextMenuList[i].Click();
      break;
    }
    if(i == (contextMenuList.length-1))
     {
       Log.Error("Option doesn't exists/Wrong Input Data"); 
       break;
     }
  }
 
  aqObject.CheckProperty(page.FindElement("//dcn-rule-family-change-view-dialog//h1"),"textContent",cmpContains," Change View ")
  page.FindElement("//dcn-rule-family-change-view-dialog//p-autocomplete//button").click()
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(viewNametoSelect,"No")
  
  let status = page.FindElement("//span[contains(@class,'view-dialog__view-status')]")
  
  if(!verifyStatus == "")
  {
    aqObject.CheckProperty(status,"textContent",cmpEqual,verifyStatus)
  }
  
  let radioBtnTextElements = page.FindElements("//span[contains(@class,'change-view-dialog__operation-summary')]")
  let radiobtns = page.FindElements("//p-radiobutton//div[contains(@class,'radiobutton-box')]") 
  
  //verify default selection
    if(!defaultSelectRadio=="")
    {
      for(let i=0 ; i<radiobtns.length;i++)
      {
        let radioClass = radiobtns[i].getAttribute('class')
        let radiotext = radioBtnTextElements[i].textContent
        if(radiotext.includes(defaultSelectRadio))
        {
         if(radioClass.includes('highlight') )
          {
            Log.Checkpoint(radiotext+" is selected by Default");
          }
          else{
            Log.Error(radiotext+" is not Selected")
          }
        }

      }
    }
  //select radio button
  for(let i=0 ; i<radiobtns.length;i++)
  {
    let radiotext = radioBtnTextElements[i].textContent
    if(radiotext.trim() == radioToSelect.trim() )
    {
      radioBtnTextElements[i].click()
    }
  }
  Buttons_Actions.okButtonClick();
}
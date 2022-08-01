var FlowScreen_Perform_Actions = require("FlowScreen_Perform_Actions");
var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");
var page = Aliases.browser.pageSapiensDecision
function DF_Screen_Change_Decision_Version(DecisionNameversion,applyChangesEverywere,applyChangesToDecisionOnly,RightClickOnElement)
{
  
  FlowScreen_Perform_Actions.DFScreen_Perform_RightClick(RightClickOnElement)
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown("Change Decision Version")
  aqObject.CheckProperty(page.FindElement("//span[@class='spec-change-dialog-version--title']"),"contentText",cmpEqual,"Change Decision Version")
  
//  Delay(2000)
  let radioBtns = page.FindElements("//*[contains(@class,'change-dialog-version__decision')]//p-radiobutton//span//parent::div")
  let radioOptions = page.FindElements("//*[contains(@class,'change-dialog-version__decision')]//*[@class='spec-decision--name version-name']")
  let applyChangesRadioBtns = page.FindElements("//*[contains(@class,'change-dialog-version__apply-changes')]//p-radiobutton//span//parent::div")
  let applyChangesOptions = page.FindElements("//span[contains(@class,'apply-decision-version-change')]")
  Log.Message(radioBtns.length)
  for(let i=0;i<radioBtns.length;i++)
  {
    let radioText = radioOptions[i].contentText.trim()
    Log.Message(radioText+"   "+DecisionNameversion)
    if(radioText == DecisionNameversion.trim())
    {
      Log.Message(radioText)
      radioBtns[i].click()
      Delay((1000))
    let classofRadio = radioBtns[i].getAttribute('class')
    if(classofRadio.includes('p-highlight'))
    {
      Log.Checkpoint("Radio is Selected successfully")
    }
    else{
      Log.Error("Radio not selected")
    }
      break;
    }
    
  }
  for(let j=0;j<applyChangesRadioBtns.length;j++)
  {
    let applychangestext = applyChangesOptions[j].textContent.trim()
    if(!applyChangesEverywere == "")
    {
      if(applychangestext =="Apply changes everywhere same version of this Decision is used in this Flow")
      {
        applyChangesRadioBtns[j].click()
        Log.Checkpoint("Apply changes everywhere same version of this Decision is used in this Flow"+ " Radio selected successfully")
        break;
      }
    }
    if(!applyChangesToDecisionOnly == "")
    {
      if(applychangestext == "Apply changes to this Decision Task only")
      {
        applyChangesRadioBtns[j].click()
        Log.Checkpoint("Apply changes to this Decision Task only"+" Radio Selected Successfully")
        Delay(1000)
        let appyChangeRadioClass = applyChangesRadioBtns[j].getAttribute('class')
        if(appyChangeRadioClass.includes('p-highlight'))
    {
      Log.Checkpoint("Radio is Selected successfully")
    }
    else{
      Log.Error("Radio not selected")
    }
        break;
      }
    }
        
        
  }
  
  
}

function Verify_No_Other_VersionFound(RightClickOnElement)
{
  FlowScreen_Perform_Actions.DFScreen_Perform_RightClick(RightClickOnElement)
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown("Change Decision Version")
  aqObject.CheckProperty(page.FindElement("//span[@class='spec-change-dialog-version--title']"),"contentText",cmpEqual,"Change Decision Version")
  let changeVersionBody = page.FindElement("//dcn-change-decision-version-dialog//div[contains(@class,'change-dialog-version')]")
  aqObject.CheckProperty(changeVersionBody,"contentText",cmpEqual,"No other version found")
}
function Assets_Add()
{
  let AddButton =  Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'+Add')]");
  return AddButton;
}

function Assets_Refresh()
{
  let RefreshButton =  Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'Refresh')]");
  return RefreshButton;
}

function Assets_Validate()
{
  let ValidateButton =  Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'Validate')]");
  return ValidateButton;
}

function Assets_ModifyDates()
{
  let ModifyDatesButton =  Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'Modify Dates')]");
  return ModifyDatesButton;
}

function Assets_Remove()
{
  let RemoveButton =  Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'Remove')]");
  return RemoveButton;
}

function DescriptiveView(Descriptive_View)
{
//  let Descriptive_View = "Off";
  
  if(Descriptive_View == "Off" && Aliases.browser.pageSapiensDecision2.FindElement("//dcn-descriptor-view-toggle//dcn-switch-button//label[@class='switch']/div/div/div[2]").getAttribute("class").includes("icon--off"))
  {
      Aliases.browser.pageSapiensDecision2.FindElement("//dcn-descriptor-view-toggle//dcn-switch-button//label[@class='switch']/div/div/div[1]").Click();
      Delay(500);
      if(Aliases.browser.pageSapiensDecision2.FindElement("//dcn-descriptor-view-toggle//dcn-switch-button//label[@class='switch']/div/div/div[1]").getAttribute("class").includes("icon--on"))
      {
      Log.Message("Switch is set to Off")
      }
  }
  else if (Descriptive_View == "On" && Aliases.browser.pageSapiensDecision2.FindElement("//dcn-descriptor-view-toggle//dcn-switch-button//label[@class='switch']/div/div/div[1]").getAttribute("class").includes("icon--on"))
  {
      Aliases.browser.pageSapiensDecision2.FindElement("//dcn-descriptor-view-toggle//dcn-switch-button//label[@class='switch']/div/div/div[2]").Click();
      Delay(500);
      if(Aliases.browser.pageSapiensDecision2.FindElement("//dcn-descriptor-view-toggle//dcn-switch-button//label[@class='switch']/div/div/div[2]").getAttribute("class").includes("icon--off"))
      {
      Log.Message("Switch is set to On")
      }
  }
  else
  {
    Log.Message("Switch is already set to " + Descriptive_View);
  }
}

function Assets_Submit()
{
  let ApprovalStrategy = "Any";
  let SubmitButton =  Aliases.browser.pageSapiensDecision2.FindElement("//button//*[contains(text(),'Submit')]");
  SubmitButton.Click();
  
  if(ApprovalStrategy == "None")
  {
    Log.Message("Approval Strategy is set to None");
  }
  else if(ApprovalStrategy == "Any" || ApprovalStrategy == "ALL")
  {   
    Aliases.browser.pageSapiensDecision.FindElement("//button[contains(text(),'Remove')]").WaitProperty("Exists", true, 20000);
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-laundry-line//span"), "contentText", cmpEqual, "CANDIDATE");  
  }
}

//function Assets_Discard()
//{
//  let DiscardButton =  Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'+Add')]");
//  return DiscardAddButton;
//}
module.exports.Assets_Validate = Assets_Validate;
module.exports.Assets_Add = Assets_Add;
module.exports.Assets_Submit = Assets_Submit;
module.exports.DescriptiveView = DescriptiveView;
var Open_TestGroup = require("Open_TestGroup");
var Item_Availability = require("Item_Availability");
function Add_New_TestGroup(Regression, Persistent, Create, Asset)
{
//  
//  let Regression = "Ys";
//  let Persistent = "Ye";
//  let Create = "Yes";
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.buttonAdd, "Enabled", cmpEqual, true);
  Aliases.browser.pageSapiensDecision2.buttonAdd.ClickButton();
  
  //aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummarySd, "contentText", cmpEqual, "Add Test Group");
  
  let TGName =  "TG" + Date.now(); 
  Log.Message(TGName);
  
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[@name='testingGroupName']").SetText(TGName);
  
  var element1 = Aliases.browser.pageSapiensDecision2.FindElement("//dcn-switch-button[@name='persistent']//label/div/div");
  var style1 = Aliases.browser.pageSapiensDecision.contentDocument.defaultView.getComputedStyle(element1, "");
  
  if((style1.background).includes("rgb(74, 207, 246)"))
  {
      Log.Message("It is Already checked");
      if(Persistent == "No")
      {
        element1.Click();
        //Don't Select Distinct User
        if((style1.background).includes("rgb(221, 221, 221)"))
        {
          Log.Checkpoint("Persistent is unchecked")
        }
        else
        {
          Log.Error("Persistent is still checked")
        }
      }
  }
  
  else if((style1.background).includes("rgb(221, 221, 221)"))
  {
    Log.Message("It is not checked"); 
    if(Persistent == "Yes")
    {
      element1.Click();
      //Select Distinct User
      if((style1.background).includes("rgb(74, 207, 246)"))
        {
          Log.Checkpoint("Persistent is Checked")
        }
        else
        {
          Log.Error("Persistent is still unchecked")
        }
    }
  }
  
if(Asset == "Decision" || Asset == "Flow")
{  
  var element2 = Aliases.browser.pageSapiensDecision2.FindElement("//dcn-switch-button[@name='regression']//label/div/div");
  var style2 = Aliases.browser.pageSapiensDecision.contentDocument.defaultView.getComputedStyle(element2, "");
  
  if((style2.background).includes("rgb(74, 207, 246)"))
  {
      Log.Message("It is Already checked");
      if(Regression == "No")
      {
        element2.Click();
        //Don't Select Distinct User
        if((style2.background).includes("rgb(221, 221, 221)"))
        {
          Log.Checkpoint("Regression is unchecked")
        }
        else
        {
          Log.Error("Regression is still checked")
        }
      }
  }
  else if((style2.background).includes("rgb(221, 221, 221)"))
  {
    Log.Message("Regression is not checked"); 
    if(Regression == "Yes")
    {
      element2.Click();
      //Select Distinct User
      if((style2.background).includes("rgb(74, 207, 246)"))
        {
          Log.Checkpoint("Regression is Checked")
        }
        else
        {
          Log.Error("Regression is still unchecked")
        }
    }
  }
  
  }
  
  if(Create == "Yes")
  {
    Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
  }
  else
  {
    Aliases.browser.pageSapiensDecision.form.buttonCancel.ClickButton();   
  }
  
  Delay(1000);
  
  Aliases.browser.pageSapiensDecision.WaitElement(Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]"), 10000);
  
//  Item_Availability.Item_Availability(TGName); 
  
  Open_TestGroup.Open_TestGroup(TGName);
  
  TestGroupName = TGName ;
  
  if(Asset == "Decision")
  {
    Project.Variables.TestGroup_Name_Decision = TGName;
  }
  else if(Asset == "Flow")
  {
    Project.Variables.TestGroup_Name_DecisionFlow = TGName;
  }
  
  
}

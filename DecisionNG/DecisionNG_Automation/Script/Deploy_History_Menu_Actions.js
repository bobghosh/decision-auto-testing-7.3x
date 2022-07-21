//USEUNIT RefLibrary
var Revision_Buttons = require("Revision_Buttons");
function Deploy_History_Menu_Actions_verify(optionToselect,statusToVerify)
{
  let page = Aliases.browser.pageSapiensDecision;
//  let optionToselect= "Unmark Deployed"
//  let statusToVerify= "UNDEPLOYED"
  //clickon menu (...)
  Revision_Buttons.Diployment_History_menu().click();
  
  let deployMenuList = page.FindElements("//*[contains(@style,'visible')]//p-contextmenusub//ul/li");
  
  for(let i=0; i< deployMenuList.length; i++)
  {
    let menuText = deployMenuList[i].contentText.trim();
    if(menuText == optionToselect)
    {
      deployMenuList[i].click();
      break;
    }
  }
  if(statusToVerify == "DEPLOYED")
  {
    Verify_Deployment_Status_Exported_To_Deployed()
  }
  else if(statusToVerify == "UNDEPLOYED")
  {
    Verify_Deployment_Status_UnDeployed();
  }
  else if(statusToVerify == "EXPORTED")
  {
    Verify_Deployment_Status_Exported();
  }
  else if(statusToVerify == "")
  {
    Log.Message("No verification needed at this stage")
  }
  
  
}


function Verify_Deployment_Status_Exported_To_Deployed()
{
  
  Aliases.browser.pageSapiensDecision.WaitElement(Aliases.browser.pageSapiensDecision.FindElement(ORGeneric.pTblFrozenView+"//tbody//tr[1]"), 10000);
  
  let Status = Aliases.browser.pageSapiensDecision.FindElement(ORGeneric.pTblFrozenView+"//tbody//tr[1]//td[2]");
  
  let hasNext = "true";
  
  //Delay(10000);
  
  do
  {
      Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Refresh']").click();

      if(Status.textContent == "DEPLOYED")
      {
        Log.Checkpoint("Tag is deployed");
        hasNext = false;
      }
      else if(Status.textContent == "EXPORTED")
      {
        Log.Message("Tag is still in EXPORTED status");
        hasNext = true;
      }
      else
      {
        Log.Error("Status is : "+ Status.textContent)
        
      }
  }while(hasNext == true)
  
  
}
module.exports.Verify_Deployment_Status_Exported_To_Deployed = Verify_Deployment_Status_Exported_To_Deployed
function Verify_Deployment_Status_Undeployed_To_Deployed()
{
  
  Aliases.browser.pageSapiensDecision.WaitElement(Aliases.browser.pageSapiensDecision.FindElement(ORGeneric.pTblFrozenView+"//tbody//tr[1]"), 10000);
  
  let Status = Aliases.browser.pageSapiensDecision.FindElement(ORGeneric.pTblFrozenView+"//tbody//tr[1]//td[2]");
  
  let hasNext = "true";
  
  //Delay(10000);
  
  do
  {
      Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Refresh']").click();

      if(Status.textContent == "DEPLOYED")
      {
        Log.Checkpoint("Tag is deployed");
        hasNext = false;
      }
      else if(Status.textContent == "UNDEPLOYED")
      {
        Log.Message("Tag is still in UNDEPLOYED status");
        hasNext = true;
      }
      else
      {
        Log.Error("Status is : "+ Status.textContent)
        
      }
  }while(hasNext == true)
  
  
}
function Verify_Deployment_Status_UnDeployed()
{
  
  Aliases.browser.pageSapiensDecision.WaitElement(Aliases.browser.pageSapiensDecision.FindElement(ORGeneric.pTblFrozenView+"//tbody//tr[1]"), 10000);
  
  let Status = Aliases.browser.pageSapiensDecision.FindElement(ORGeneric.pTblFrozenView+"//tbody//tr[1]//td[2]");
  
  let hasNext = "true";
  
  //Delay(10000);
  
  do
  {
      Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Refresh']").click();

      if(Status.textContent == "UNDEPLOYED")
      {
        Log.Checkpoint("Tag is UNDEPLOYED");
        hasNext = false;
      }
      else if(Status.textContent == "DEPLOYED")
      {
        Log.Message("Tag is still in DEPLOYED status");
        hasNext = true;
      }
      else
      {
        Log.Error("Status is : "+ Status.textContent)
        
      }
  }while(hasNext == true)
  
  
}

function Verify_Deployment_Status_Exported()
{
  
  Aliases.browser.pageSapiensDecision.WaitElement(Aliases.browser.pageSapiensDecision.FindElement(ORGeneric.pTblFrozenView+"//tbody//tr[1]"), 10000);
  
  let Status = Aliases.browser.pageSapiensDecision.FindElement(ORGeneric.pTblFrozenView+"//tbody//tr[1]//td[2]");
  
  let hasNext = "true";
  
  //Delay(10000);
  
  do
  {
      Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Refresh']").click();

      if(Status.textContent == "EXPORTED")
      {
        Log.Checkpoint("Tag is EXPORTED");
        hasNext = false;
      }
      else if(Status.textContent == "REQUESTED")
      {
        Log.Message("Tag is still in REQUESTED status");
        hasNext = true;
      }
      else
      {
        Log.Error("Status is : "+ Status.textContent)
        
      }
  }while(hasNext == true)
  
  
}
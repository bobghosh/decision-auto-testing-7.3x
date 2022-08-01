//USEUNIT RefLibrary

function Verify_Deployment_History()
{
  aqUtils.Delay(3000)
  let verifyAssetStatus = "DEPLOYED"
  Aliases.browser.pageSapiensDecision.WaitElement(Aliases.browser.pageSapiensDecision.FindElement(ORGeneric.pTblFrozenView+"//tbody//tr[1]"), 10000);
  
  let Status = Aliases.browser.pageSapiensDecision.FindElement(ORGeneric.pTblFrozenView+"//tbody//tr[1]//td[2]");
  
  let hasNext = "true";

  aqPerformance.Start("counter not to exceed 1 min", false)
  do
  {
      
      Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Refresh']").click();

      if(Status.textContent == "DEPLOYED")
      {
        Log.Checkpoint("Tag is deployed");
        hasNext = false;
      }
      if(Status.textContent == "EXPORTED")
      {
        Log.Checkpoint("Tag is EXPORTED");
        hasNext = false;
      }   
      else if(Status.textContent == "FAILED")
      {
        Log.Error("Tag is failed");
        hasNext = false;
      }
      else if(Status.textContent == "REQUESTED")
      {
        Log.Message("Tag is still in requested status");
        hasNext = true;
        check = aqPerformance.Value("counter not to exceed 1 min")
        if(check >= 60000){
          Log.Error("Asset still in requested status after 1 min. breaking test")
          Runner.Stop(true)
        }
          
      }
  }while(hasNext == true && check <= 60000)
  
  
}
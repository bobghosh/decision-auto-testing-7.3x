function Verify_Repair_Icon()
{
  let repairIcon = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[5]//span");
  
  if(repairIcon.getAttribute("class").includes("icon-validation_error"))
  {
//    ptooltip="The Test Group is no longer valid due to model changes"
    Log.Checkpoint("Repair Icon is present")
    Log.Message(repairIcon.getAttribute("ptooltip"));
  }
  else
  {
    Log.Error("Repair Icon is not present hence the model is not updated")  
  } 
  
}


function test()
{
    let repairIcon = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr//td[5]//span");
  
  if(repairIcon.size > 0)
  {
    Log.Message("Repair icon is available for the Test Groups")    
  }
}
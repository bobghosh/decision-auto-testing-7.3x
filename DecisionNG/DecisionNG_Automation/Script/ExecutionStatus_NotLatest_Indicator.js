function NotLatest_Icon_Available_TestCase_Execution_Status()
{
  let notLatest_Icon = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr//td[4]//i");
  
  if(notLatest_Icon.length > 0)
  {
    Log.Checkpoint("Test Case is updated and Execution Status is 'Not Latest'")
  }
  else
  {
    Log.Error("Test case execution status is not updated");
  }
  
}

function NotLatest_Icon_Not_Available_TestCase_Execution_Status()
{
  let notLatest_Icon = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr//td[4]//i");
  
  if(notLatest_Icon.length == 0)
  {
    Log.Checkpoint("Test case execution status is 'Latest'")
  }
  else
  {
    Log.Error("Test case execution status is ''Not Latest'");
  }
  
}
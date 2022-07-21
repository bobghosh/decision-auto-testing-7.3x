function verifyMappedNameErrorMessage()
{
  var Verify_Error_Exists_NotExists = 'Not Exists'
  var page= Aliases.browser.pageSapiensDecision
  page.FindElement("//dcn-model-mapping-fact-type-mapped-name//label").Click()
  Delay(2000);
  let childCount=page.FindElement("//input[@name='FactTypeMappedName']//ancestor::div[@class='fx-field--inputAndError']").ChildCount
  Log.Message(childCount);
  if(Verify_Error_Exists_NotExists == 'Exists')
  {
  if(childCount>1)
    {
      let errorMessage = page.FindElement("//span[@class='fx-field__errors ng-star-inserted']//label").textContent
      Log.Checkpoint("Error Message : "+errorMessage);
    }
  else
    {
      Log.Error("Error Message not displayed");
    }
  }
  else
  {
    if(childCount>1)
    {
      let errorMessage = page.FindElement("//span[@class='fx-field__errors ng-star-inserted']//label").textContent
      Log.Error("Error Message : "+errorMessage);
    }
  else
    {
      Log.Checkpoint("Error Message not displayed");
    }
  }
  
  
  
}
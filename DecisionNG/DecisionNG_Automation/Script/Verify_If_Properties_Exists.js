function Verify_If_Properties_Exists(){
  let page= Aliases.browser.pageSapiensDecision;
  let spanElements = page.FindElements("//dcn-additional-info-custom-property-tab//span")
  if(spanElements.length == 1)
  {
    let spanText = spanElements[0].textContent;
      Log.Checkpoint(spanText);
  }
  else
  {
    Log.Error("Properties were found")
  }
}


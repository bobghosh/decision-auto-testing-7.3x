function AI_Click_Open()
{
  //to OPen the assets AI without title verification
  var page = Aliases.browser.pageSapiensDecision2;
 
 let add_Info_Panel=page.FindElement("//dcn-additional-info-side-bar//button");
 
 add_Info_Panel.click();
  Delay(1000);
  
  let add_Info_Panel_ClassAfter = page.FindElement("//dcn-additional-info-side-bar//*[contains(@class,'ui-sidebar-right')]").getAttribute('class');
  
  if(add_Info_Panel_ClassAfter.includes('ui-sidebar-active'))
  {
    Log.Checkpoint("Additional Information Panel is opened Successfully");
  }
  else
  {
    Log.Error("Additional Information Panel is not Opened");
  }
  
}
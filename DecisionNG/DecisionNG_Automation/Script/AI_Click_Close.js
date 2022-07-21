function AI_Click_Close()
{
  var page = Aliases.browser.pageSapiensDecision2;
  let ai_Closebtn = page.FindElement("//dcn-additional-info-side-bar//button[contains(@class,'p-sidebar-close')]");
  
  
  ai_Closebtn.Click();
  Delay(1000);
  let add_Info_Panel = page.FindElement("//dcn-additional-info-side-bar//dcn-sidebar/p-sidebar");
  let childCountOf_Add_Info_Panel = add_Info_Panel.ChildCount
  Log.Message(childCountOf_Add_Info_Panel)
  //let add_Info_Panel_ClassAfter = add_Info_Panel.getAttribute('class');
  
  if(childCountOf_Add_Info_Panel>0)
  {
    Log.Error("Additional Information Panel not closed");
  }
  else
  {
    Log.Checkpoint("Additional Information Panel is closed Successfully");
  }
}
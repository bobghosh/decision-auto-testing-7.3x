function Click_Open_Assets(Asset)
{
  let page =Aliases.browser.pageSapiensDecision2
  let E = page.FindElements("//dcn-additional-info-decision-tab//dcn-link-label/parent ::div")
  Log.Message(E.length);
  
  for(let i=0;i<E.length;i++)
  {
    Log.Message(E[i].childcount)
    Log.Message(E[i].TextContent)
    if(E[i].childcount == '1')
    {
      if(E[i].TextContent == Asset)
      {
        E[i].click();
        Log.Message("clicked");
        page.WaitElement(page.FindElement("//canvas"),40000);
        break;
  
      }
    }
  }
}
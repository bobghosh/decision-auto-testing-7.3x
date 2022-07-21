function Select_Community()
{
  let CommunityNode = Aliases.browser.pageSapiensDecision2.textnode11.textnode12.textnode17;
  Log.Message(CommunityNode.getAttribute("className"));
  
  if(CommunityNode.getAttribute("className").includes("pi-caret-right"))
  {
    CommunityNode.Click();
  }
 
}

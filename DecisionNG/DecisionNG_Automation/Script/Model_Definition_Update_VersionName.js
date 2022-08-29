function Model_Definition_Update_VersionName(EditVersionName, NewVersion, Update)
{
    
  let VersionTab = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(text(), 'Versions')]/../span[1]");  
  if(VersionTab.getAttribute("class").includes("pi-chevron-right"))
  {
    VersionTab.click();
  }
    
  let VersionCount = Aliases.browser.pageSapiensDecision2.FindElements("//tbody//tr//td[1]/div/div");
  for(let i = 1; i <=VersionCount.length; i++)
  {
    let VersionName = Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr["+ i +"]//td[1]/div/div[1]");
    Log.Message(VersionName.textContent);
      
    if(VersionName.textContent.trim() == EditVersionName)
    {
        VersionName.HoverMouse();          
        Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'model-definition-versions')]//tr["+ i +"]//td[3]//i[@class='icon-edit']").click();
        if(Aliases.browser.pageSapiensDecision2.FindElement("//*[@key='version']").Exists == true)
        {
            Aliases.browser.pageSapiensDecision2.FindElement("//*[@key='version']").SetText(NewVersion);
            
            if(Update == "Yes")
            {
            Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'model-definition-versions')]//tr["+ i +"]//i[@class='icon-valid']").click();
            }
            else if(Update == "No")
            {
            Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'model-definition-versions')]//tr["+ i +"]//i[@class='icon-fail']").click();
            }
        }
        else
        {
          Log.Error("The Edit button did not click");
        }
          
    }
      
  }   
    
  var count = 0
  let NewVersionCount = Aliases.browser.pageSapiensDecision2.FindElements("//tbody//tr//td[1]/div/div");
  for(let j = 1; j <= NewVersionCount.length; j++)
  {
    let NewVersionName = Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr["+ j +"]//td[1]/div/div[1]");
    if(NewVersionName.textContent.trim() == NewVersion)
    {
      Log.Message("Version Name is updated to "+ NewVersion);
      count = 1;
      break;
    }
  }
  if(count==1)
    Log.Checkpoint("Version Name is updated to "+ NewVersion)
  else  
    Log.Error('updated version not found')
    
}
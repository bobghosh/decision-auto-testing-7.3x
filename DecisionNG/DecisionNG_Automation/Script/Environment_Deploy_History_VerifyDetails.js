//USEUNIT RefLibrary

function Environment_Deploy_History_Openenv_Verify(EnvironmentName)
{
  let page = Aliases.browser.pageSapiensDecision
  let environmentDeployHistorylist = page.FindElements(ORGeneric.tblUnfrozenView+"//tbody//tr")
  for(let i=1 ; i<= environmentDeployHistorylist.length;i++)
  {
    let envName = page.FindElement(ORGeneric.tblUnfrozenView+"//tbody/tr["+i+"]/td[1]//a")
    if(envName.contentText.trim() == EnvironmentName)
    {
      envName.click();  
      page.WaitElement("//span[@class='spec-env-deploy-history-title']");
      //aqObject.CheckProperty(page.FindElement("//span[@class='spec-env-deploy-history-title']"),"contentText",cmpEqual,"Deployment History for environment:")
      aqObject.CheckProperty(page.FindElement("//span[@class='spec-env-deploy-history-title']/b"),"contentText",cmpEqual,EnvironmentName)
      break;
    }
  }
}

function Environment_Deploy_History_VerifyDetails(EnvironmentName,Status,Type,Community)
{
  
  let page = Aliases.browser.pageSapiensDecision
  let environmentDeployHistorylist = page.FindElements(ORGeneric.tblUnfrozenView+"//tbody//tr")
  for(let i=1 ; i<= environmentDeployHistorylist.length;i++)
  {
    let envName = page.FindElement(ORGeneric.tblUnfrozenView+"//tbody/tr["+i+"]/td[1]//a")
    if(envName.contentText.trim() == EnvironmentName )
    {
      let status = page.FindElement(ORGeneric.tblUnfrozenView+"//tbody/tr["+i+"]/td[2]");
      let type = page.FindElement(ORGeneric.tblUnfrozenView+"//tbody/tr["+i+"]/td[3]");
      let community = page.FindElement(ORGeneric.tblUnfrozenView+"//tbody/tr["+i+"]/td[4]");
      
      aqObject.CheckProperty(status,"contentText",cmpEqual,Status)
      aqObject.CheckProperty(type,"contentText",cmpEqual,Type)
      aqObject.CheckProperty(community,"contentText",cmpEqual,Community)
      
    }  
  }
    
}
var Model_Definition_Version_Availability_Check = require("Model_Definition_Version_Availability_Check");
function Model_Definition_Remove_Version(RemoveVersion, RemoveVersionName)
{
      
    let VersionTab = Aliases.browser.pageSapiensDecision2.linkVersions.textnode8;  
    if(VersionTab.getAttribute("class").includes("pi-chevron-right"))
    {
      VersionTab.click();
    }
        
    let VersionCount = Aliases.browser.pageSapiensDecision2.FindElements("//dcn-model-definition-versions//tbody//tr//td[1]/div/div");

    for(let i = 1; i <= VersionCount.length; i++)
    {
      let VersionName = Aliases.browser.pageSapiensDecision2.FindElement("//dcn-model-definition-versions//tbody//tr["+ i +"]//td[1]/div/div[1]");
      Log.Message(VersionName.textContent);
      
      if(VersionName.textContent.trim() == RemoveVersionName)
      {
          Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'model-definition-versions')]//tr["+i+"]//i[contains(@class,'icon-close')]").click();
          
          aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeAreYouSureYouWantToRemov, "contentText", cmpEqual, "Are you sure you want to remove this version?");

          if(RemoveVersion == "Yes")
          {
            Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
               
          }
          else
          {
              Aliases.browser.pageSapiensDecision.form.buttonCancel.ClickButton();
          }
          
          break;
      }
      
      
    }
    
    Model_Definition_Version_Availability_Check.Model_Definition_Version_Availability_Check(RemoveVersionName);
      
      
    
}

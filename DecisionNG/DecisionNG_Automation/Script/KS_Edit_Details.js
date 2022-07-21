function KS_Edit_Details(KSName,VersionIdentifier,Description){
let page =Aliases.browser.pageSapiensDecision2;  
//let KSName='Asha'
//let VersionIdentifier='21.0';
//let Description='Text';
if(KSName != null && KSName != "")
      {
        page.FindElement("//label[contains(text(),'Knowledge Source name')]//following-sibling::div//input").Click();
        
        page.FindElement("//label[contains(text(),'Knowledge Source name')]//following-sibling::div//input").SetText(KSName);        
       }
if(VersionIdentifier != null && VersionIdentifier != "")
      {
        page.FindElement("//label[contains(text(),'Version identifier')]//following-sibling::div//input").Click();
        
        page.FindElement("//label[contains(text(),'Version identifier')]//following-sibling::div//input").SetText(VersionIdentifier);        
       }
   
 if(Description != null && Description != "")
      {
        page.FindElement("//label[contains(text(),'Description')]//following-sibling::div//textarea").Click();
       
        page.FindElement("//label[contains(text(),'Description')]//following-sibling::div//textarea").Keys(Description);        
       }   

 page.FindElement("//button[contains(text(),' OK ')]").Click();
 Delay(1000);
 aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.panelDraft, "contentText", cmpEqual, "DRAFT");
 Project.Variables.Additional_Info_Draft_KS_Name=page.FindElement("//div[@class='knowledge-source__asset-links--list']//*[contains(@class,'component__selected')]/span").textContent;
 
}

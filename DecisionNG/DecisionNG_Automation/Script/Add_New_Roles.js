var GenerateRandomNumber = require("GenerateRandomNumber");
function Add_New_Role_ClickOK(RoleName,permissionGroups)
{
    
      let num= GenerateRandomNumber.get4DigitRandomInt()
      var page = Aliases.browser.pageSapiensDecision;
    
      page.FindElement("//*[contains(@class,'add-button')]").Click();
      page.FindElement("//input[@name='name']").SetText(RoleName+" "+num);
    
      Project.Variables.Security_New_Role_Added = RoleName+" "+num;
            
     if(!permissionGroups == "")
      {
        var permissions_Grp_array = permissionGroups.split(',');
     
        for(var i = 0; i < permissions_Grp_array.length; i++) 
        { 
          page.FindElement("//ul//li[@aria-label= '"+permissions_Grp_array[i]+"']//*[@class='ui-chkbox ui-widget ng-star-inserted']").click();           
        }
      }
      Aliases.browser.pageSapiensDecision.form.buttonOk.Click();

}

function Add_New_Role_Click_Cancel(RoleName,permissionGroups)
{
     let num= GenerateRandomNumber.get4DigitRandomInt()
      var page = Aliases.browser.pageSapiensDecision;
    
      page.FindElement("//*[contains(@class,'add-button')]").Click();
      page.FindElement("//input[@name='name']").SetText(RoleName+" "+num);
    
      Project.Variables.Security_New_Role_Added = RoleName+" "+num;
            
     if(!permissionGroups == "")
      {
        var permissions_Grp_array = permissionGroups.split(',');
     
        for(var i = 0; i < permissions_Grp_array.length; i++) 
        { 
          page.FindElement("//ul//li[@aria-label= '"+permissions_Grp_array[i]+"']//*[@class='ui-chkbox ui-widget ng-star-inserted']").click();           
        }
      }
      
      Aliases.browser.pageSapiensDecision.form.buttonCancel.ClickButton();
}
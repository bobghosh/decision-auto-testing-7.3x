var GenerateRandomNumber = require("GenerateRandomNumber");
function Add_New_Permission_ClickOK(permissionGroupName,permissions)
{
    
      let num= GenerateRandomNumber.get4DigitRandomInt()
      var page = Aliases.browser.pageSapiensDecision;
    
      page.FindElement("//*[contains(@class,'add-button')]").Click();
      page.FindElement("//input[@name='name']").SetText(permissionGroupName+" "+num);
    
      Project.Variables.Security_New_PermissionGrp = permissionGroupName+" "+num;
            
     if(!permissions == "")
      {
        var permissions_array = permissions.split(',');
     
        for(var i = 0; i < permissions_array.length; i++) 
        { 
          Aliases.browser.pageSapiensDecision.FindElement("//ul//li[@aria-label= '"+permissions_array[i]+"']//*[@class='ui-chkbox ui-widget ng-star-inserted']").click();           
        }
      }
      Aliases.browser.pageSapiensDecision.form.buttonOk.Click();

}

function Add_New_Permission_Click_Cancel(permissionGroupName,permissions)
{
      let num= GenerateRandomNumber.get4DigitRandomInt()
      var page = Aliases.browser.pageSapiensDecision;
    
      page.FindElement("//*[contains(@class,'add-button')]").Click();
      page.FindElement("//input[@name='name']").SetText(permissionGroupName+" "+num);
    
      Project.Variables.Security_New_PermissionGrp = permissionGroupName+" "+num;
      Sys.Desktop.Keys("[Shift][Ctrl][S]");
    
      var permissions_array = permissions.split(',');
  
      for(var i = 0; i < permissions_array.length; i++) 
      { 
        Aliases.browser.pageSapiensDecision.FindElement("//ul//li[@aria-label= '"+permissions_array[i]+"']//*[@class='ui-chkbox ui-widget ng-star-inserted']").click();           
      }
      
      Aliases.browser.pageSapiensDecision.form.buttonCancel.ClickButton();
}
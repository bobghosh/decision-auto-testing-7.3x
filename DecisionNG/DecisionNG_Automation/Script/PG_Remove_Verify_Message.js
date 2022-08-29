var Verify_PermissionGrp_Exists_NotExists = require("Verify_PermissionGrp_Exists_NotExists");
var WaitElement_ispresent = require("WaitElement_ispresent");
var Buttons_Actions = require("Buttons_Actions");
function Permisssion_Group_Remove_Verify_Message(permissionGrp,usedPermissionGrp)
{ 
  var ItemCount;
  var flag = "0";
  var page = Aliases.browser.pageSapiensDecision;
  let Paginator;  
  
  
    if(page.FindElements("//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
    let hasNext = "true";
             
  do
  {     
    //Row Counts in one page
    ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody/tr");
 
    for(var j = 1; j <= ItemCount.length ; j++)
    {
      var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//a");
      let ItemLinkName=HighlightedItemName.textContent.toString().trim();
      
      if(ItemLinkName == permissionGrp)
      {
        var removeButton = page.FindElement("//tbody/tr["+j+"]/td[3]//button[@aria-label='Delete']")
        if(usedPermissionGrp == "Yes")
        {
          removeButton.HoverMouse();
          removeButton.ClickButton();
          CheckProperty(page.FindElement("//dcn-message-dialog//h1"),"contentText",cmpEqual,"Delete")
          CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//div[2]/div[contains(@class, 'u-flex-container')]"),"contentText",cmpEqual,"Are you sure?")
          Buttons_Actions.okButtonClick();
          WaitElement_ispresent.Wait_Until_Element_ispresent("//div[@id='toast-container']/div/div[1]")
          CheckProperty(page.FindElement("//div[@id='toast-container']/div/div[1]") ,"contentText",cmpEqual,"An error occurred: Please click this message to navigate to the homepage. Use the Back button to navigate back.")
          CheckProperty(page.FindElement("//div[@id='toast-container']/div/div[2]") ,"contentText",cmpEqual,"The permission group is used by one or more roles")
          page.FindElement("//div[@id='toast-container']/div/div[1]").Click();
          page.Wait();
//          WaitElement_ispresent.Wait_Until_Element_ispresent("//tbody/tr") 
//          Delay(1000)
//          Verify_PermissionGrp_Exists_NotExists.Verify_Created_PermissionGroups_and_Permissions(permissionGrp,"Exists")
          flag = "1";
        }
        else
        {
          removeButton.HoverMouse();
          removeButton.ClickButton();
          CheckProperty(page.FindElement("//dcn-message-dialog//h1"),"contentText",cmpEqual,"Delete")
          CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//div[2]/div[contains(@class, 'u-flex-container')]"),"contentText",cmpEqual,"Are you sure?")
          Buttons_Actions.okButtonClick();
          Delay(1000)
          Verify_PermissionGrp_Exists_NotExists.Verify_Created_PermissionGroups_and_Permissions(permissionGrp,"Not Exists")
          flag = "1";
        }
      }
  
      if(flag == "1")      
      {
        break;
      }

    }
 
    
    if(flag == "1")      
      {
        break;
      }
          if(Paginator == "Yes")
          {
            if(page.FindElement("//*[contains(@class,'i-paginator-next')]").getAttribute("class").includes("ui-state-disabled"))
            { 
              hasNext = "false";
            }
            else
            {
              page.FindElement("//*[contains(@class,'i-paginator-next')]").click();  
              Delay(2000);       
            }
          }
          else
          {
            hasNext = "false";
          }
        
    }while (hasNext==true)
}

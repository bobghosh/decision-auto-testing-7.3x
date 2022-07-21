var Verify_PermissionGrp_Exists_NotExists = require("Verify_PermissionGrp_Exists_NotExists");
var GenerateRandomNumber = require("GenerateRandomNumber");
function Edit_Existing_Permission_ClickOK(permissionGroupName,addRandomNum,permissions,removePermission,addPermission)
{
    
      let num= GenerateRandomNumber.get4DigitRandomInt()
      var page = Aliases.browser.pageSapiensDecision;
    
      if(!permissionGroupName == "")
      {
        let nameInput= page.FindElement("//input[@name='name']");
        let textBeforeEdit= nameInput.Text;
        if(addRandomNum == 'Yes')
        {
          nameInput.SetText(permissionGroupName+" "+num);
        }
        else
        {
          nameInput.SetText(permissionGroupName);
        }
        Delay(2000)
        let textAfterEdit = nameInput.Text;
        
        Project.Variables.Security_New_PermissionGrp = permissionGroupName+" "+num;
        if(textAfterEdit == textBeforeEdit)
        {
          Log.Error("Permission group before edit : "+textBeforeEdit+" Permission group after edit : "+textAfterEdit)
        }
        else
        {
          Log.Checkpoint("Permission group before edit : "+textBeforeEdit+" Permission group after edit : "+textAfterEdit)
        }
      
      }
      if(!permissions == "")
      {
      var permissions_array = permissions.split(',');
  
      for(var i = 0; i < permissions_array.length; i++) 
      { 
        let permission = page.FindElement("//ul//li[@aria-label= '"+permissions_array[i]+"']//*[@class='ui-chkbox ui-widget ng-star-inserted']")
        let firstchild = permission.firstchild
        //Log.Message(firstchild.getAttribute('class'))
        let firstChildClass= firstchild.getAttribute('class')
        if(!addPermission == "")
        {
          
          if(firstChildClass.includes('ui-state-active'))
          {
            Log.Checkpoint(permissions_array[i]+" : Permission is already checked")
          }
          else
          {
            permission.Click();
            let afterCheckFirstchild = permission.firstchild
            let classAfterCheck= afterCheckFirstchild.getAttribute('class')
            if(classAfterCheck.includes('ui-state-active'))
            {
              Log.Checkpoint(permissions_array[i]+" : Permission Checked Successfully")
            }
            else
            {
              Log.Error(permissions_array[i]+ " : Permission not checked")
            }
            
          }
        
        }
        else if(!removePermission == "")
        {
          if(firstChildClass.includes('ui-state-active'))
          {
            permission.Click();
            let afterUnCheckFirstchild = permission.firstchild
            let classAfterUnCheck= afterUnCheckFirstchild.getAttribute('class')
            if(classAfterUnCheck.includes('ui-state-active'))
            {
              Log.Error(permissions_array[i]+" : Permission not Unchecked")
            }
            else
            {
              Log.Checkpoint(permissions_array[i]+" : Permission UnChecked Successfully")
            }
          }
          else
          {
            Log.Checkpoint(permissions_array[i]+" : Permission is already Unchecked")
          }
        }

        
                   
      }
      
      }

}

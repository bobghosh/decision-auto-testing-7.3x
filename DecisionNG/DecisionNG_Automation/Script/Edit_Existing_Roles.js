var Verify_Role_Exists_Not_Exists = require("Verify_Role_Exists_Not_Exists");
var GenerateRandomNumber = require("GenerateRandomNumber");
function Edit_Existing_Roles_ClickOK(Role_Name,addRandomNum,permission_grp,removePermission,addPermission)
{
    
      let num= GenerateRandomNumber.get4DigitRandomInt()
      var page = Aliases.browser.pageSapiensDecision;
    
      if(!Role_Name == "")
      {
        let nameInput= page.FindElement("//input[@name='name']");
        let textBeforeEdit= nameInput.Text;
        if(addRandomNum == 'Yes')
        {
          nameInput.SetText(Role_Name+" "+num);
        }
        else
        {
          nameInput.SetText(Role_Name);
        }
        Delay(2000)
        let textAfterEdit = nameInput.Text;
        
        Project.Variables.Security_New_Role_Added = Role_Name+" "+num;
        if(textAfterEdit == textBeforeEdit)
        {
          Log.Error("Role before edit : "+textBeforeEdit+" Role after edit : "+textAfterEdit)
        }
        else
        {
          Log.Checkpoint("Role before edit : "+textBeforeEdit+" Role after edit : "+textAfterEdit)
        }
      
      }
      
      if(!permission_grp == "")
      {
      var permissions_grp_array = permission_grp.split(',');
  
      for(var i = 0; i < permissions_grp_array.length; i++) 
      { 
        let permission_group = page.FindElement("//ul//li[@aria-label= '"+permissions_grp_array[i]+"']//*[@class='ui-chkbox ui-widget ng-star-inserted']")
        let firstchild = permission_group.firstchild
        //Log.Message(firstchild.getAttribute('class'))
        let firstChildClass= firstchild.getAttribute('class')
        if(!addPermission == "")
        {
          
          if(firstChildClass.includes('ui-state-active'))
          {
            Log.Checkpoint(permissions_grp_array[i]+" : Permission Group is already checked")
          }
          else
          {
            permission_group.Click();
            let afterCheckFirstchild = permission_group.firstchild
            let classAfterCheck= afterCheckFirstchild.getAttribute('class')
            if(classAfterCheck.includes('ui-state-active'))
            {
              Log.Checkpoint(permissions_grp_array[i]+" : Permission Group Checked Successfully")
            }
            else
            {
              Log.Error(permissions_grp_array[i]+ " : Permission Group not checked")
            }
            
          }
        
        }
        else if(!removePermission == "")
        {
          if(firstChildClass.includes('ui-state-active'))
          {
            permission_group.Click();
            let afterUnCheckFirstchild = permission_group.firstchild
            let classAfterUnCheck= afterUnCheckFirstchild.getAttribute('class')
            if(classAfterUnCheck.includes('ui-state-active'))
            {
              Log.Error(permissions_grp_array[i]+" : Permission Group not Unchecked")
            }
            else
            {
              Log.Checkpoint(permissions_grp_array[i]+" : Permission Group UnChecked Successfully")
            }
          }
          else
          {
            Log.Checkpoint(permissions_grp_array[i]+" : Permission Group is already Unchecked")
          }
        }

        
                   
      }
      
      }

}

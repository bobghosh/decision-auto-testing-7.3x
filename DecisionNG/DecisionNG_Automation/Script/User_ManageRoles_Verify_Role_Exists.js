function Users_ManageRole_Verify_Roles_Exists(rolesToVerify,verifyRolesExists)
{
  
  var page = Aliases.browser.pageSapiensDecision2;
  let roles= page.FindElements("//dcn-multi-select//ul/li/span")
  

    for(let i=0 ; i< roles.length ; i++)
    {
      var flag='0'
      let permissionGrp=roles[i].contentText
      if(permissionGrp == rolesToVerify)
      {
        flag= '1'
        Log.Checkpoint(rolesToVerify+" Role Exists")
        break;
      }
    
    }
    if(verifyRolesExists == 'Yes')
    {
      if(flag=='1')
      {
        Log.Checkpoint(rolesToVerify+" Role Exists")
      }
      else
      {
        Log.Error(rolesToVerify+" Role Don't Exists")
      }
    }
    else
    {
      if(flag=='1')
      {
        Log.Error(rolesToVerify+" Role Exists")
      }
      else
      {
        Log.Checkpoint(rolesToVerify+ " Role Don't Exists")
      }
    }

}
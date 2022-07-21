function Roles_Manage_PG_Verify_PG_Exists(permissionGrpToVerify,verifyPermissionGrpExists)
{
  
  var page = Aliases.browser.pageSapiensDecision2;
  let permissionGroups= page.FindElements("//dcn-multi-select//ul/li/span")
  

    for(let i=0 ; i< permissionGroups.length ; i++)
    {
      var flag='0'
      let permissionGrp=permissionGroups[i].contentText
      if(permissionGrp == permissionGrpToVerify)
      {
        flag= '1'
        Log.Checkpoint(permissionGrpToVerify+" Permission Group Exists")
        break;
      }
    
    }
    if(verifyPermissionGrpExists == 'Yes')
    {
      if(flag=='1')
      {
        Log.Checkpoint(permissionGrpToVerify+" Permission Group Exists")
      }
      else
      {
        Log.Error(permissionGrpToVerify+" Permission Group Don't Exists")
      }
    }
    else
    {
      if(flag=='1')
      {
        Log.Error(permissionGrpToVerify+" Permission Group Exists")
      }
      else
      {
        Log.Checkpoint(permissionGrpToVerify+ " Permission Group Don't Exists")
      }
    }

}
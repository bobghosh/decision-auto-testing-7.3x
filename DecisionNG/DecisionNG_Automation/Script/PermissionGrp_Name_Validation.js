function PermissionGrp_Name_Validation_CheckError(permissionGrpName,validateIfErrorExists)
{
  var page = Aliases.browser.pageSapiensDecision
  inputFeild = page.FindElement("//input[@name='name']")
  validationCheckObj = page.FindElement("//input[@name='name']//ancestor::*[contains(@class,'form-group')]");
 
  inputFeild.SetText(permissionGrpName);
  
  if(validateIfErrorExists == "Yes")
  {
     
    if(validationCheckObj.getAttribute('class').includes('invalid'))
    {
      let validationMessage = page.FindElement("//div//span[contains(@class,'error-label')]").textContent
      Log.Checkpoint("Validation error : "+validationMessage)
    }
    else{
      Log.Error("Validation Error dosen't exist")
    }
  }
  else
  {
    if(validationCheckObj.getAttribute('class').includes('invalid'))
    {
      Log.Checkpoint("Validation Error dosen't exist")
    }
    else{
      Log.Error("Validation error : "+validationMessage)
    }
  }
}
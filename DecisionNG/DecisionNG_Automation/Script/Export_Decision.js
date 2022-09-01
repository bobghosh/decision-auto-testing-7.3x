//USEUNIT SelectingOptionfromDropDown_Role

function Export_Decision(typeOfExport,fileFormat,fileNameWithExt)
{
  filePath = "C:\\Users\\"+Sys.UserName+"\\Downloads\\"+fileNameWithExt
  if(aqFile.Exists(filePath))
  {
    aqFile.Delete(filePath)
  }
  let page = Aliases.browser.pageSapiensDecision2
  page.FindElement("//div[@type='button']").Click()
  page.WaitElement("//a[contains(., 'export')]",5000).HoverMouse()
  switch(aqString.ToLower(typeOfExport))
  {
    case "asset":
    page.WaitElement("//a[contains(., 'Asset')]", 5000).Click()
    page.WaitElement("//dcn-combo-box[@name='Exported File Format']//span[@class='wj-input-group-btn']", 5000).Click()
    SelectingOptionfromDropdown(fileFormat,"No")
    page.FindElement("//button[contains(text(), 'Export')]").Click()
    aqObject.CheckProperty(page.WaitElement("//div[contains(@class, 'toast-info')]", 25000), "contentText", cmpEqual, "Export process has started and may take a while to complete");
    page.WaitElement("//div[contains(@class, 'toast-info')]", 25000).Click()
    break;
  }
  
  WaitForFileToDownloadInDownloadsFolder(fileNameWithExt)
  if(aqFile.Exists("C:\\Users\\"+Sys.UserName+"\\Downloads\\"+fileNameWithExt))
  {
    Log.Checkpoint("Export is successful")
  }
  else
    Log.Error("Export is not successful")

}

function WaitForFileToDownloadInDownloadsFolder(fullFileName){
  
  var flag = false
  filePath = "C:\\Users\\"+Sys.UserName+"\\Downloads\\"+fullFileName;
  
  while(flag == false){
    
    if(aqFile.Exists(filePath)){
      flag = true;
      Log.Checkpoint(fullFileName+' file is now downloaded successfully')
    }
    else{
      flag = false;
      Log.Message('waiting for file to download');
    }

  }
}
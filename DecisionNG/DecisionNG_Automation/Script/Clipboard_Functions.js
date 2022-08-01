//USEUNIT RefLibrary

function copyObjectTextToClipboard(object){
  
  let page = Aliases.browser.pageSapiensDecision2;
  let objectText = page.WaitElement(object, 15000).innerText;

  Sys.Clipboard = objectText  
}

function verifyCopiedTextinClipboard(textToVerify){
  
  if(Sys.Clipboard == textToVerify)
    Log.Checkpoint("text copied to clipbaord is matching")
  else
    Log.Error("mismatch with data or copy to clipboad is not working")
}
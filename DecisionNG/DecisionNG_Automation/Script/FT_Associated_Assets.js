//USEUNIT RefLibrary

function ExpandAssociatedAssetsTab(){
  let page = Aliases.browser.pageSapiensDecision2
  let Associatedtab = page.FindElement(ORRuleFamily.associatedAssets+"/ancestor::a");
  
  var tabExpand = Associatedtab.getAttribute("aria-expanded")
  if(tabExpand.toLowerCase().trim() == 'false')
  {
    Log.Checkpoint("Associated tab is not expanded. clicking on the tab")
    Associatedtab.click();
  }
  else
    Log.Message("Associated tab was already expanded")
}

function TickAssetInAssociatedAssetsTab(AssetName){
  
  let page = Aliases.browser.pageSapiensDecision2
  let AssociatedtabAsset = page.FindElement("//li[contains(., '"+AssetName+"')]//p-checkbox//span/..");
  
  var checkboxStatus = AssociatedtabAsset.getAttribute("class")
  if(checkboxStatus.toLowerCase().trim().includes('state-active'))
    Log.Message("given asset name is already ticked")
  else{
    Log.Checkpoint("given asset name is Not ticked. Clicking on it")
    AssociatedtabAsset.click();
  }
}

module.exports.ExpandAssociatedAssetsTab = ExpandAssociatedAssetsTab
module.exports.TickAssetInAssociatedAssetsTab = TickAssetInAssociatedAssetsTab
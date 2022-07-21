//USEUNIT RefLibrary

function Community_VG_Folder_Select(SelectOption,Community_VG_Folder_Name)
{
  let page= Aliases.browser.pageSapiensDecision2
  //let Community = page.FindElement("//*[@role='treeitem']//span[text()="+"'"+""+Community_VG_Folder_Name+""+"'"+"]")
  if(SelectOption == 'Community')
  {
    let community= page.FindElement(ORGeneric.roleTreeItem+"//span[text()="+"'"+""+Community_VG_Folder_Name+""+"'"+"]//parent::span/"+ORRepository.clsCommunityIcn)
    community.Click();
  }
  
  else
  {
   let vgFolder = page.FindElement(ORGeneric.roleTreeItem+"//span[text()="+"'"+""+Community_VG_Folder_Name+""+"'"+"]//parent::span/"+ORRepository.clsViewGroupIcn)
    vgFolder.click();
  }
  
  
}
module.exports.Community_VG_Folder_Select = Community_VG_Folder_Select;
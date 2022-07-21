//USEUNIT RefLibrary

function Community_Expand_Verify(CommunityName)
{ 
  CommunityArray= CommunityName.toString().split(",");
  //Log.Message(CommunityArray.length);
  for(let i=0;i<CommunityArray.length;i++)
  {
    Delay(500);
  //let Expand_Collapse_Icon = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()="+"'"+""+CommunityArray[i]+""+"'"+"]//ancestor::span/parent::div/span[contains(@class,'ui-tree-toggler pi pi-fw ui-unselectable-text')]")
  //let Expand_Collapse_Icon = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()="+"'"+""+CommunityArray[i]+""+"'"+"]//ancestor::span/parent::div//span[contains(@class,'p-tree-toggler-icon')]")
  let Expand_Collapse_Icon = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()="+"'"+""+CommunityArray[i]+""+"'"+"]//ancestor::span/parent::div"+ORRepository.clsTreeToggleerIcn)
  if(Expand_Collapse_Icon.getAttribute('class').includes('chevron-right'))
  {
    Log.Checkpoint("Community is Collapsed");
    Expand_Collapse_Icon.Click();
    if(Expand_Collapse_Icon.getAttribute('class').includes('chevron-down'))
      {
        Log.Checkpoint("Community is expanded successfully");
      }
      else
      {
        Log.Error("Community is not Expanded");
      }
  }
  else
    {
      Log.Checkpoint("Community is already Expanded");
    }
  }
}

//Expand ViewGroup Function
function ViewGroup_Expand_Verify(VGName)
{ 
   VGNames= VGName.toString().split(",");
  
  for(let i=0;i<VGNames.length;i++)
  {
  let Expand_Collapse_Icon = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()="+"'"+""+VGNames[i]+""+"'"+"]//ancestor::span/parent::div/span[contains(@class,'ui-tree-toggler pi pi-fw ui-unselectable-text')]")
  if(Expand_Collapse_Icon.getAttribute('class').includes('pi-caret-right'))     
  {
    Log.Checkpoint("View Group is Collapsed");
    Expand_Collapse_Icon.Click();
    if(Expand_Collapse_Icon.getAttribute('class').includes('pi-caret-down'))
      {
        Log.Checkpoint("View Group is expanded successfully");
      }
      else
      {
        Log.Error("View Group is not Expanded");
      }
  }
  else
    {
      Log.Checkpoint("View Group is already Expanded");
    }
  }
}
module.exports.Community_Expand_Verify = Community_Expand_Verify;
module.exports.ViewGroup_Expand_Verify = ViewGroup_Expand_Verify;
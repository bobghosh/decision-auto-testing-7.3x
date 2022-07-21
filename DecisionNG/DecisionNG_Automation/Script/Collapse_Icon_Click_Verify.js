function Community_Collapse_Verify(CommunityName)
{
  CommunityArray= CommunityName.toString().split(",");
  //Log.Message(CommunityArray.length);
  for(let i=0;i<CommunityArray.length;i++)
  {
      let Expand_Collapse_Icon = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()="+"'"+""+CommunityArray[i]+""+"'"+"]//ancestor::span/parent::div/span[contains(@class,'ui-tree-toggler pi pi-fw ui-unselectable-text')]")
      if(Expand_Collapse_Icon.getAttribute('class').includes('pi-caret-down'))
      {
        Log.Checkpoint("Community is Expanded");
        Expand_Collapse_Icon.Click();
        if(Expand_Collapse_Icon.getAttribute('class').includes('pi-caret-right'))
          {
            Log.Checkpoint("Community is Collapsed successfully");
          }
          else
          {
            Log.Error("Community is not collapsed successfully");
          }
      }
      else
        {
          Log.warning("Community is already Collapsed");
        }
  
  }

}

//ViewGroup Collapse Function
function ViewGroup_Collapse_Verify(VGName)
{
  VGNames= VGName.toString().split(",");
  
  for(let i=0;i<VGNames.length;i++)
  {
  let Expand_Collapse_Icon = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()="+"'"+""+VGNames[i]+""+"'"+"]//ancestor::span/parent::div/span[contains(@class,'ui-tree-toggler pi pi-fw ui-unselectable-text')]")
  if(Expand_Collapse_Icon.getAttribute('class').includes('pi-caret-down'))
  {
    Log.Checkpoint("ViewGroup is Expanded");
    Expand_Collapse_Icon.Click();
    if(Expand_Collapse_Icon.getAttribute('class').includes('pi-caret-right'))
      {
        Log.Checkpoint("ViewGroup is Collapsed successfully");
      }
      else
      {
        Log.Error("ViewGroup is not collapsed successfully");
      }
  }
  else
    {
      Log.warning("ViewGroup is already Collapsed");
    }
  }
}
module.exports.Community_Collapse_Verify = Community_Collapse_Verify;
module.exports.ViewGroup_Collapse_Verify = ViewGroup_Collapse_Verify;
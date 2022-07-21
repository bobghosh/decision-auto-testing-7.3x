function AI_Tags_Verify(tagsToVerify)
{
  var tagnames= tagsToVerify.toString().split(',')
  var page = Aliases.browser.pageSapiensDecision2;
  
  for(let j=0; j<tagnames.length ; j++)
  {
    let flag = 'false'
    var tagsList = page.FindElements("//span[text()='Tags: ']//parent::div//div//dcn-link-label/div");
    let vgIconList = page.FindElements("//span[text()='Tags: ']//parent::div//div//dcn-link-label/div/i");
    for(let i=0; i<tagsList.length; i++)
    {
        let tagName= tagsList[i].textContent.replace(/\s/g, '')
        //Log.Message(tagName)
        if(tagName == tagnames[j].replace(/\s/g, ''))
        {
          if(vgIconList[i].visibleOnScreen)
          {
            Log.Checkpoint(tagnames[j]+" VG Icon is displayed")
          }
          
          else
          {
            Log.Error(tagnames[j]+" VG Icon is not displayed")
          }
          
          Log.CheckPoint("Tag Present & Verified: "+tagnames[j])
          flag = 'true';
          
        }
        
    }
    if(flag == 'true')
    {
      Log.Checkpoint("TagName is verified Successfully")
    }
    else{
      Log.Error("TagName does not exist in the list of Tags")
    }
  }
}
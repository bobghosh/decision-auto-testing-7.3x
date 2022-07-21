function AI_LatestRevisions_Verify()
{
  var revisionsToVerify = "ATR DF V1.1/Master/8614183"
  var revisions= revisionsToVerify.toString().split(',')
  var page = Aliases.browser.pageSapiensDecision2;
  
  for(let j=0; j<revisions.length ; j++)
  {
    let flag = 'false'
    var revisionsList = page.FindElements("//span[text()='Latest Revisions: ']//parent::div//div//dcn-link-label/div");
    let vgIconList = page.FindElements("//span[text()='Latest Revisions: ']//parent::div//div//dcn-link-label/div//i");
    for(let i=0; i<revisionsList.length; i++)
    {
        let revisionName= revisionsList[i].textContent.replace(/\s/g, '')
//        Log.Message(revisionName)
//        Log.Message(revisions[j])
        if(revisionName == revisions[j].replace(/\s/g, ''))
        {
          if(vgIconList[i].visibleOnScreen)
          {
            Log.Checkpoint(revisions[j]+" VG Icon is displayed")
          }
          
          else
          {
            Log.Error(revisions[j]+" VG Icon is not displayed")
          }
          
          Log.CheckPoint("Revision Present & Verified: "+revisions[j])
          flag = 'true';
          
        }
        
    }
    if(flag == 'true')
    {
      Log.Checkpoint("Revision is verified Successfully")
    }
    else{
      Log.Error("Revision does not exist in the list of Latest Revisions")
    }
  }
}
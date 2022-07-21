//USEUNIT RefLibrary
var WaitElement_ispresent = require("WaitElement_ispresent");
let page = Aliases.browser.pageSapiensDecision
function Environment_Deploy_History()
{
  let environmentDeployHistoryBtn = page.FindElement(ORRepository.dcnRepoProjectTab+"//button[contains(@class,'spec-project-tab__buttons__deploy_history')]")
  environmentDeployHistoryBtn.Click()
  WaitElement_ispresent.Wait_Until_Element_ispresent(ORGeneric.dcnEnvDialog+ORGeneric.dcnDialog+"//h1")
  aqObject.CheckProperty(environmentDeployHistoryBtn,"contentText",cmpEqual,"Environment Deploy History")
  
}
function Add_Project()
{
  let addProjectBtn =page.FindElement(ORRepository.dcnRepoProjectTab+"//button[contains(@class,'add-project spec-project-tab__buttons_')]")
  addProjectBtn.Click();
  WaitElement_ispresent.Wait_Until_Element_ispresent("//add-project-dialog"+ORGeneric.dcnDialog+"//h1")
  aqObject.CheckProperty(addProjectBtn,"contentText",cmpEqual,"Create New Project")
}
function Environment_Deploy_History_radioBtn_Click(radioBtnClickOption)
{
  var radioBtn =page.FindElement(ORGeneric.dcnEnvDialog+"//*[@class='switch']")
  let thisCommunity = page.FindElement("//span[contains(text(),' This community ')]//parent::div")
  let allCommunities = page.FindElement("//span[contains(text(),' All communities ')]//parent::div")
  
  //let radioBtnClickOption = "This community"
  if(radioBtnClickOption == "This community")
  {
    let thisCommunityClass = thisCommunity.getAttribute("class");
    if(thisCommunity.hasAttribute('class'))
    {
    if(thisCommunityClass.includes("dcn-disable-color"))
    {
      radioBtn.click()
      Delay(2000)
      let classafterclick = thisCommunity.getAttribute("class")
      if(classafterclick == "")
      {
        Log.Checkpoint("This Community is selected successfully")
      }
      else
      {
        Log.Error("This Community is not selected")
      }
    }
    else
    {
      Log.Checkpoint("This Community is already selected")
    }
  }
  else{
    Log.Checkpoint("This Community is already selected")
  }
  
  }
  else if(radioBtnClickOption == "All communities")
  {
    let allCommunitiesClass = allCommunities.getAttribute("class");
    if(allCommunitiesClass.includes("dcn-disable-color"))
    {
      radioBtn.click()
      Delay(2000)
      let classafterclick = allCommunities.getAttribute("class")
      if(classafterclick == "")
      {
        Log.Checkpoint("All Communities is selected successfully")
      }
      else
      {
        Log.Error("All Communities is not selected")
      }
    }
    else{
      Log.Checkpoint("All Communities is already selected")
    }
  }

}
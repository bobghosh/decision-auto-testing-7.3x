function Refresh()
{
  let Refreshbutton = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-action-btn dcn-light-button--dark revision-action-buttons-panel__button refresh u-margin-right--full']");
  return Refreshbutton;
}

function Tag_button()
{
  let Tagbutton = Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'Tag')]");
  return Tagbutton;
}

function Merge_button()
{
  let Mergebutton = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(text(),'Merge')]");
  return Merge;
}

function Compare_button()
{
  let Comparebutton = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(text(),'Compare')]");
  return Compare;
}

function New_Branch_button()
{
  let NewBranchbutton = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(text(),'New Branch')]");
  return CNewBranchbutton;
}

function Deployment_Validation_button()
{
  let DeploymentValidationbutton = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(text(),'Deployment Validation')]");
  return DeploymentValidationbutton;
}

function Create_Revision_Task()
{
  let CreateRevisionTaskbutton = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(text(),'Create Revision Task')]");
  return CreateRevisionTaskbutton;
}

function Deploy_button()
{
  let Deploybutton = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()='Deploy ']");
  return Deploybutton;
}

function Diployment_History_menu()
{
  
  let deploymentHistoryMenuBtn = Aliases.browser.pageSapiensDecision.FindElement("//tr[1]//dcn-button-menu//*[@type='button']")
  return deploymentHistoryMenuBtn;

}
module.exports.Create_Revision_Task = Create_Revision_Task;
module.exports.Tag_button = Tag_button;
module.exports.Deployment_Validation_button = Deployment_Validation_button;
module.exports.Deploy_button = Deploy_button;
module.exports.Diployment_History_menu = Diployment_History_menu;
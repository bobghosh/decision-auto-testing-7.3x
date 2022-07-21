//USEUNIT RefLibrary

function SideBarNavigationInsideModelingProj(menuName){
  
  let page = Aliases.browser.pageSapiensDecision2
  
  page.WaitElement(ORRepository.dcnModelingProject, 50000);
  
  if(menuName.toLowerCase().trim()=='details')
    page.FindElement(".navigation-menu__item__details").Click();
  else if(menuName.toLowerCase().trim()=='tasks')
    page.FindElement(".navigation-menu__item__projectTasks").Click();
  else if(menuName.toLowerCase().trim()=='attachments')
    page.FindElement(".navigation-menu__item__attachments").Click();
  else
    Log.Error("Sub menu not found")

}

function SubTabSelectionInDetails(tabName){
  
  let page = Aliases.browser.pageSapiensDecision2
  var count = 0;
  page.WaitElement(ORRepository.dcnModelingProject+"-details", 50000);
  
  let alltab = page.FindElements(ORGeneric.liRolePresentation+"//span");
  for(var i = 0; i < alltab.length ; i++){
    if(tabName.toLowerCase().trim() == alltab[i].innerText.toLowerCase().trim()){
      alltab[i].Click();
      count++;
    }
  }
  
  if(count<=0)
    Log.Error("Sub tab not found")
}
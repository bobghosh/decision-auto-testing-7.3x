//USEUNIT RefLibrary

function Breadcrumb(BreadcrumbName)
{
  Aliases.browser.pageSapiensDecision.FindElement("//*[(text()='" + BreadcrumbName  +"') and not ("+ORBreadcrumb.clsBrdcrumbTipText+")]").Click();
  //Dropdown click
  //a[contains(@class,'ng-star-inserted')]//*[text()='File Extensions']
  //(//*[@class='breadcrumb ng-star-inserted']//dcn-breadcrumb-popup)[1] - dropdown

}

function Breadcrumb_New(Type, BreadcrumbName)
{
  let page = Aliases.browser.pageSapiensDecision
  
  if(Type.toLowerCase() == 'task')
    LinkType = 'icon-task'
    
  else if(Type.toLowerCase().replace(' ', '') == 'rulefamily')
    LinkType = 'icon-rule_family_view'
    
  else if(Type.toLowerCase().replace(' ', '') == 'decision')
    LinkType = 'icon-decision_view'
  
  else if(Type.toLowerCase() == 'community')
    LinkType = 'icon-community icon'
  
  else if(Type.toLowerCase() == 'modelling')
    LinkType = 'modelling_project'
    
  page.FindElement("//*[contains(@class,'"+LinkType+"')]//following-sibling::span[(text()='" + BreadcrumbName + "') and not ("+ORBreadcrumb.clsBrdcrumbTipText+")]").click();

}

module.exports.Breadcrumb = Breadcrumb;
function updateDecription(description){
  
  Aliases.browser.pageSapiensDecision.FindElement("*[name='description']").Keys("^a[BS]")
  Aliases.browser.pageSapiensDecision.FindElement("*[name='description']").Keys(description)
  
}

function updateName(input){
  
  Aliases.browser.pageSapiensDecision.FindElement("*[name='name']").Keys("^a[BS]")
  Aliases.browser.pageSapiensDecision.FindElement("*[name='name']").SetText(input)
  
}

function clickMoreDetails(){
  
  Aliases.browser.pageSapiensDecision.FindElement("//a[contains(text(), 'More Details')]").Click()
  Aliases.browser.pageSapiensDecision.WaitElement("//label[contains(text(), 'Glossary')]")
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//label[contains(text(), 'Glossary')]"), 'VisibleOnScreen', cmpEqual, true)
}

function clickFactTypeSummary(){
  
  aqUtils.Delay(3000)
  Aliases.browser.pageSapiensDecision.FindElement("//span[text()='Fact Type Summary']").Click()
}

function VerifyDescirptionUpdatedinsideFactType(description){
  
  aqUtils.Delay(1000)
  obj = Aliases.browser.pageSapiensDecision.FindElement("*[name='description']")
  aqObject.CheckProperty(obj,'value', cmpContains, description)
}

function VerifyNameUpdatedinsideFactType(inputname){
  
  aqUtils.Delay(1000)
  obj = Aliases.browser.pageSapiensDecision.FindElement("*[name='name']")
  aqObject.CheckProperty(obj,'value', cmpContains, inputname)
}
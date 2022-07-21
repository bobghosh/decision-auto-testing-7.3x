function FT_Tab_AllFields_Disabled_Verify(){
  
  let page = Aliases.browser.pageSapiensDecision2;
      page.WaitElement("//span[text()='To edit the approved Fact Type click']//following::a[text()='Enable Editing']",10000);
  
  let oElement =  page.FindElement("//fact-type-dialog//a[text()='Enable Editing']");
  aqObject.CheckProperty(oElement, 'VisibleOnScreen', cmpEqual, true);
  
  oElement =  page.FindElement("//*[@name='name']");
  aqObject.CheckProperty(oElement, 'Enabled', cmpEqual, false);
  
  oElement =  page.FindElement("*[name='description']")
  aqObject.CheckProperty(oElement, 'Enabled', cmpEqual, true);
  
  oElement =  page.FindElement("//div[@aria-label='Single Value']");
  aqObject.CheckProperty(oElement, 'isContentEditable', cmpEqual, false);
  
  oElement =  page.FindElement("//div[@aria-label='Multiple Values']");
  aqObject.CheckProperty(oElement, 'isContentEditable', cmpEqual, false);
  
  oElement =  page.FindElement("//*[@name='templateName']");
  aqObject.CheckProperty(oElement, 'isContentEditable', cmpEqual, false);
  
  oElement =  page.FindElement("*[name='dataType']");
  aqObject.CheckProperty(oElement, 'isContentEditable', cmpEqual, false);
  
  oElement =  page.FindElement("*[name='displayFormat']");
  aqObject.CheckProperty(oElement, 'isContentEditable', cmpEqual, false);
  
  oElement =  page.FindElement("*[name='allowedValues']");
  aqObject.CheckProperty(oElement, 'isContentEditable', cmpEqual, false);
  
  oElement =  page.FindElement("//fact-type-dialog//button[contains(text(), 'Cancel')]");
  aqObject.CheckProperty(oElement, 'Enabled', cmpEqual, true);
  
  oElement =  page.FindElement("//fact-type-dialog//button[contains(text(), 'OK')]");
  aqObject.CheckProperty(oElement, 'Enabled', cmpEqual, true);
}

function Enable_Editing_RF(){
  
  let page =Aliases.browser.pageSapiensDecision2;
page.FindElement("//fact-type-dialog//a[text()='Enable Editing']").click();
Delay(3000);

}
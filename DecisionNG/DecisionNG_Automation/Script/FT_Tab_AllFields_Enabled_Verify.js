function FT_Tab_AllFields_Enabled_Verify(){
  
  let page = Aliases.browser.pageSapiensDecision2;
      page.WaitElement("//fact-type-dialog//span[text()='DRAFT']",10000);
  
  let oElement =  page.FindElement("//*[@name='name']");
  aqObject.CheckProperty(oElement, 'Enabled', cmpEqual, true);
  
  oElement =  page.FindElement("*[name='description']");
  aqObject.CheckProperty(oElement, 'Enabled', cmpEqual, false);
  
  oElement =  page.FindElement("//div[@aria-label='Single Value']");
  aqObject.CheckProperty(oElement, 'Enabled', cmpEqual, true);
  
  oElement =  page.FindElement("//div[@aria-label='Multiple Values']");
  aqObject.CheckProperty(oElement, 'Enabled', cmpEqual, true);
  
  oElement =  page.FindElement("[name='template'] [type='text']");
  aqObject.CheckProperty(oElement, 'Enabled', cmpEqual, true);
  
  oElement =  page.FindElement("[name='dataType'] [type='text']");
  aqObject.CheckProperty(oElement, 'disabled', cmpEqual, false);
  
  oElement =  page.FindElement("[name='displayFormat'] [type='text']");
  aqObject.CheckProperty(oElement, 'disabled', cmpEqual, false);
  
  oElement =  page.FindElement("[name='allowedValues'] [type='text']");
  aqObject.CheckProperty(oElement, 'disabled', cmpEqual, false);
  
  oElement =  page.FindElement("//fact-type-dialog//button[contains(text(), 'Cancel')]");
  aqObject.CheckProperty(oElement, 'Enabled', cmpEqual, true);
  
  oElement =  page.FindElement("//fact-type-dialog//button[contains(text(), 'OK')]");
  aqObject.CheckProperty(oElement, 'Enabled', cmpEqual, true);
}
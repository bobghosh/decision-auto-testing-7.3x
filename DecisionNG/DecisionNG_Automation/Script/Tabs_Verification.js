//USEUNIT RefLibrary

function NewTabVerification(FactTypeNameparameter)
{
  let Tabs =  Aliases.browser.pageSapiensDecision.FindElement(ORRepository.specImportGlossary+"//ul//li[1][@role='presentation']");
  let TabName = Tabs.textContent;
  
  if(TabName.charAt(TabName.length-2) > 0)
  {
  
      let NewFactTypecheckbox = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[1]"+ORRepository.chbSpecMultiSelect+"//span");
      if(NewFactTypecheckbox.getAttribute("class").includes("pi pi-check"))
    	{
        Log.Message("Already the Fact Types are Selected");         
    	}
      else
      {
        Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[1]"+ORRepository.chbSpecMultiSelect+"//div[2]").click();
        Log.Checkpoint("All the Fact Types are Selected");  
      }
  
      let NewFactTypeList = Aliases.browser.pageSapiensDecision.FindElements("//p-tabpanel[1]//p-listbox//ul//li");
    
      for (var i = 1; i<=NewFactTypeList.length; i++)
      {
        let NewFactTypeName = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[1]//p-listbox//ul//li[" +i+ "]");
        NewFactTypeName.click();
      
        let textbox = Aliases.browser.pageSapiensDecision.form.form2;
        let textbox2 = textbox.form3;
        let textbox3 = textbox2.textboxName;
  
        aqObject.CheckProperty(textbox3, "Text", cmpEqual, FactTypeNameparameter);
        aqObject.CheckProperty(textbox3, "Enabled", cmpEqual, false);
  
        aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[1]//textarea"), "isContentEditable", cmpEqual, false);
    
        let NewFTSingleValuebutton = Aliases.browser.pageSapiensDecision2.FindElement("//p-tabpanel[1]"+ORGeneric.lblSingleValue);
        if(NewFTSingleValuebutton.getAttribute("class").includes("p-disabled"))
        {
            Log.Message("Single Value Button is disabled");
        }
        else
        {
            Log.Error("List Indicator is Enabled");
        }
    
        let NewFTMultipleValuebutton = Aliases.browser.pageSapiensDecision2.FindElement("//p-tabpanel[1]"+ORGeneric.lblMultipleValue);
        if(NewFTMultipleValuebutton.getAttribute("class").includes("p-disabled"))
        {
            Log.Message("Multiple Value Button is disabled");
        }
        else
        {
            Log.Error("List Indicator is Enabled");
        }
      
        let NewFTDataType = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[1]"+ORGeneric.ftDataType+"//input");
        if(NewFTDataType.getAttribute("disabled") == "")
        {
            Log.Message("Data Type is disabled");
        }
        else
        {
            Log.Error("Data Type field is Enabled");
        }
    
        let NewFTDispayFormat = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[1]"+ORGeneric.ftDisplayFormat+"//input");
        if(NewFTDispayFormat.getAttribute("disabled") == "")
        {
            Log.Message("Display Format is disabled");
        }
        else
        {
            Log.Error("Display Format field is Enabled");
        }
    
        let NewFTAllowedValues = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[1]"+ORGeneric.ftAllowedValues+"//input");
        if(NewFTAllowedValues.getAttribute("disabled") == "")
        {
            Log.Message("Allowed Value is disabled");
        }
        else
        {
            Log.Error("Allowed Value is Enabled");
        }
  
    }
  }
  else if(TabName.charAt(TabName.length-2) == 0)
  {
      Log.Message("File doesn't hold FactTypes");
  }
  
}

function NewVersionTabVerification(FactTypeNameparameter)
{
  let NewVersionsFactTypecheckbox = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[2]"+ORRepository.chbSpecMultiSelect+"//span");
  if(NewVersionsFactTypecheckbox.getAttribute("class").includes("pi pi-check"))
  {
      Log.Message("Fact Types are already selected");
  }
  else
  {
    Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[2]"+ORRepository.chbSpecMultiSelect+"//div[2]").Click()
    Log.Message("All Fact Types are selected");
  }
  
  let NewVersionFactTypeList = Aliases.browser.pageSapiensDecision.FindElements("//p-tabpanel[2]//p-listbox//ul//li");
            
  for (var j = 1; j<=NewVersionFactTypeList.length; j++)
  {
    let NewVersionFactTypeName = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[2]//p-listbox//ul//li[" +j+ "]");
    NewVersionFactTypeName.click();
    
    let browser = Aliases.browser;
    let textbox = browser.pageSapiensDecision.form.form2;
    let textbox2 = textbox.form3;
    let textbox3 = textbox2.textboxName;
    
    aqObject.CheckProperty(textbox3, "Text", cmpEqual, FactTypeNameparameter);
    aqObject.CheckProperty(textbox3, "Enabled", cmpEqual, false);
      
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[2]//textarea"), "isContentEditable", cmpEqual, false);
    
    let NewVersionFTSingleValuebutton = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[2]"+ORGeneric.lblSingleValue);
    if(NewVersionFTSingleValuebutton.getAttribute("class").includes("p-disabled"))
    {
      Log.Message("Single Value Button is disabled");
    }else
    {
      Log.Error("Enabled");
    }
                
    let NewVersionFTMultipleValuebutton = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[2]"+ORGeneric.lblMultipleValue);
    if(NewVersionFTMultipleValuebutton.getAttribute("class").includes("p-disabled"))
    {
      Log.Message("Multiple Value Button is disabled");
    }else
    {
      Log.Error("Enabled");
    }
    
    let NewVersionFTDataType = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[2]"+ORGeneric.ftDataType+"//input");
    if(NewVersionFTDataType.getAttribute("disabled") == "")
    {
      Log.Message("Data Type is disabled");
    }else
    {
      Log.Error("Enabled");
    }
    
    let NewVersionFTDispayFormat = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[2]"+ORGeneric.ftDisplayFormat+"//input");
    if(NewVersionFTDispayFormat.getAttribute("disabled")== "")
    {
      Log.Message("Display Format is disabled");
    }else
    {
      Log.Error("Enabled");
    }
                
    let NewVersionFTAllowedValues = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[2]"+ORGeneric.ftAllowedValues+"//input");
    if(NewVersionFTAllowedValues.getAttribute("disabled")== "")
    {
      Log.Message("Allowed Value is disabled");
    }else
    {
      Log.Error("Enabled");
    } 
                
  }
}

function ChangedTabVerification(FactTypeNameparameter)
{
  let ChangedFactTypecheckbox = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]"+ORRepository.chbSpecMultiSelect+"//span");
  if(ChangedFactTypecheckbox.getAttribute("class").includes("pi pi-check"))
	{
    Log.Message("Already the Fact Types are Selected");         
	}
  else
  {
    Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]"+ORRepository.chbSpecMultiSelect+"//div[2]").click();
    Log.Checkpoint("All the Fact Types are Selected");  
  }
            
  let ChangedFactTypeList = Aliases.browser.pageSapiensDecision.FindElements("//p-tabpanel[3]//p-listbox//ul//li");
  
  for (var m = 1; m<=ChangedFactTypeList.length; m++)
  {
    let ChangedFactTypeName = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]//p-listbox//ul//li[" +m+ "]");
    ChangedFactTypeName.click(); 
    
    let textbox = Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName;
    aqObject.CheckProperty(textbox, "Text", cmpEqual, FactTypeNameparameter);
    aqObject.CheckProperty(textbox, "Enabled", cmpEqual, false);
      
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//p-tabpanel[3]//textarea"), "Enabled", cmpEqual, true);
    let ChangedFTSingleValuebutton = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]"+ORGeneric.lblSingleValue);
    if(ChangedFTSingleValuebutton.getAttribute("class").includes("p-disabled"))
    {
        Log.Message("Single Value Button is disabled");
    }else
    {
        Log.Error("Enabled");
    }
              
   let ChangedFTMultipleValuebutton = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]"+ORGeneric.lblMultipleValue);
    if(ChangedFTMultipleValuebutton.getAttribute("class").includes("p-disabled"))
    {
        Log.Message("Multiple Value Button is disabled");
    }else
    {
        Log.Error("Enabled");
    }
              
    let ChangedFTDataType = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]"+ORGeneric.ftDataType+"//input");
    if(ChangedFTDataType.getAttribute("disabled") == "")
    {
        Log.Message("Data Type is disabled");
    }else
    {
        Log.Error("Enabled");
    }
              
   let ChangedFTDispayFormat = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]"+ORGeneric.ftDisplayFormat+"//input");
    if(ChangedFTDataType.getAttribute("disabled") == "")
    {
        Log.Message("Display Format is disabled");
    }else
    {
        Log.Error("Enabled");
    }
              
   let ChangedFTAllowedValues = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]"+ORGeneric.ftAllowedValues+"//input");
    if(ChangedFTAllowedValues.getAttribute("disabled") == "")
    {
        Log.Message("Allowed Value is disabled");
    }else
    {
        Log.Error("Enabled");
    }      
  }
}

function ImportErrorsTabVerifications(FactTypeNameparameter)
{
  let ErrorFactTypesList = Aliases.browser.pageSapiensDecision.FindElements("//p-tabpanel[4]//p-listbox//ul//li");
           
  for (var k = 1; k<=ErrorFactTypesList.length; k++)
  {
                  
  let ErrorFactType = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[4]//p-listbox//ul//li["+k+"]");
  
  aqObject.CheckProperty(ErrorFactType, "textContent", cmpEqual, " "+FactTypeNameparameter+" ");
                 
  let ErrorMessage = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[4]//dcn-bullet//span");
                                
  Log.Message(ErrorFactType.textContent + " Fact Type cannot be imported due to following error Message "+ ErrorMessage.textContent);
           
   }
}

function UnchangedTabVerification(FactTypeNameparameter)
{
  let UnchangedFactTypes = Aliases.browser.pageSapiensDecision.FindElements("//p-tabpanel[5]//p-listbox//ul//li");
  for (var l = 1; l<=UnchangedFactTypes.length; l++)
  {
    let UnchangedFactType = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[5]//p-listbox//ul//li["+l+"]");
    UnchangedFactType.Click();
    
    let textbox = Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName;
    aqObject.CheckProperty(textbox, "Text", cmpEqual, FactTypeNameparameter);
    aqObject.CheckProperty(textbox, "Enabled", cmpEqual, false);
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//p-tabpanel[5]//textarea"), "Enabled", cmpEqual, true);
    
    let UnchangedFTSingleValuebutton = Aliases.browser.pageSapiensDecision2.FindElement("//p-tabpanel[5]"+ORGeneric.lblSingleValue);
    if(UnchangedFTSingleValuebutton.getAttribute("class").includes("p-disabled"))
    {
        Log.Message("Single Value Button is disabled");
    }
    else
    {
        Log.Error("Enabled");
    }
              
    let UnchangedFTMultipleValuebutton = Aliases.browser.pageSapiensDecision2.FindElement("//p-tabpanel[5]"+ORGeneric.lblMultipleValue);
    if(UnchangedFTMultipleValuebutton.getAttribute("class").includes("p-disabled"))
    {
        Log.Message("Multiple Value Button is disabled");
    }
    else
    {
        Log.Error("Enabled");                     
    }
             
    let UnchangedFTDataType = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[5]"+ORGeneric.ftDataType+"//input");
    if(UnchangedFTDataType.getAttribute("disabled") == "")
    {
        Log.Message("Data Type is disabled");
    }
    else
    {
        Log.Error("Enabled");
    }
             
    let UnchangedFTDispayFormat = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[5]"+ORGeneric.ftDisplayFormat+"//input");
    if(UnchangedFTDataType.getAttribute("disabled") == "")
    {
        Log.Message("Display Format is disabled");
    }
    else
    {
        Log.Error("Enabled");
    }
              
    let UnchangedFTAllowedValues = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[5]"+ORGeneric.ftAllowedValues+"//input");
    if(UnchangedFTAllowedValues.getAttribute("disabled") == "")
    {
        Log.Message("Allowed Value is disabled");
    }
    else
    {
        Log.Error("Enabled");
    }    
  }
}
module.exports.NewTabVerification = NewTabVerification;
module.exports.NewVersionTabVerification = NewVersionTabVerification;
module.exports.ChangedTabVerification = ChangedTabVerification;
module.exports.ImportErrorsTabVerifications = ImportErrorsTabVerifications;
module.exports.UnchangedTabVerification = UnchangedTabVerification;

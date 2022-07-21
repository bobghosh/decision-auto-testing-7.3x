//USEUNIT RefLibrary
var Tabs_Verification = require("Tabs_Verification");

function ImportGlossaryXMLVerification()
{ 
let FTName, SORID;
      
Project.Variables.ImportGlossary.Reset();
  
for(; !Project.Variables.ImportGlossary.IsEOF();)
{                
if(Project.Variables.ImportGlossary.Value("Test Case Execution") == "Yes")
{
  aqTestCase.Begin(Project.Variables.ImportGlossary.Value("Test Case Number") + "_" + Project.Variables.ImportGlossary.Value("TestCaseName"));
            
  if(Project.Variables.ImportGlossary.Value("FactTypeNameUpdate") == "Yes")
  {              
    let uniqueValue = Date.now();
    var timestamp = new Date();
    FTName = "FTName " + timestamp.getMilliseconds().toString() + uniqueValue + timestamp.getHours().toString() + timestamp.getMinutes().toString();
    Log.Message(FTName);                
  }
  else if (Project.Variables.ImportGlossary.Value("FactTypeNameUpdate") == "No")
  {
    //Project.Variables.ImportGlossary.Reset();   
    Log.Message(FTName);
  }          
          
  if((Project.Variables.ImportGlossary.Value("SORIDUpdate")) == "Yes")
  {
    let numberunique = Date.now()
    var UniqueSORID = new Date();
    SORID = "ab" + UniqueSORID.getMilliseconds().toString() +"bc" + UniqueSORID.getHours().toString() + numberunique;
    Log.Message(SORID);         
  }
  else if((Project.Variables.ImportGlossary.Value("SORIDUpdate")) == "Empty")
  {
      SORID = "";           
      Log.Message(SORID);
  }
  else if((Project.Variables.ImportGlossary.Value("SORIDUpdate")) == "No")
  {
          //Project.Variables.ImportGlossary.Reset();   
          Log.Message(SORID);   
  }
            
  let DomainValue, DataType, TestValue, SORName, Description, ListIndicator;
    
      if(Project.Variables.ImportGlossary.Value("File Creation") == "Yes")
      {
        TestedApps.notepad.Run(1, true);
        let notepad = Aliases.browser.notepad;
        let wndNotepad = notepad.wndNotepad;
        wndNotepad.Maximize();
        let edit = wndNotepad.Edit;
        
        edit.VScroll.Pos = 0;
        
        edit.Keys(Project.Variables.ImportGlossary.Value("XMLPart1"));
        edit.Keys("[Enter]");
        
        
        edit.Keys("<name>" + FTName +"</name>");
        edit.Keys("[Enter]");
        
        edit.Keys(Project.Variables.ImportGlossary.Value("XMLPart2"));
        edit.Keys("[Enter]");
  
        DomainValue = Project.Variables.ImportGlossary.Value("DomainType");
        edit.Keys(("<domainType>" + DomainValue +"</domainType>"));
        edit.Keys("[Enter]");
        
        DataType = Project.Variables.ImportGlossary.Value("DataType");       
        edit.Keys("<dataType>" + DataType + "</dataType>");
        edit.Keys("[Enter]");
        
        edit.Keys(Project.Variables.ImportGlossary.Value("RangesOrDomainValue"));
        edit.Keys("[Enter]");
        
        edit.Keys(Project.Variables.ImportGlossary.Value("XMlPart3"));
        edit.Keys("[Enter]");
        
        if((Project.Variables.ImportGlossary.Value("DescriptionUpdate")) == "Yes")
        {
          Description = Project.Variables.ImportGlossary.Value("Description");
          edit.Keys("<description>" + Description + "</description>");
          edit.Keys("[Enter]");       
        }
        
        edit.Keys(Project.Variables.ImportGlossary.Value("XMLPart4"));
        edit.Keys("[Enter]");
        
        SORName =  Project.Variables.ImportGlossary.Value("SORName");
        edit.Keys("<systemOfRecordName>"+ SORName +"</systemOfRecordName>");
        edit.Keys("[Enter]");
        
        edit.Keys("<systemOfRecordId>" + SORID + "</systemOfRecordId>");
        edit.Keys("[Enter]");
        
        edit.Keys(Project.Variables.ImportGlossary.Value("XMLPart5"));
        edit.Keys("[Enter]");  
         
        ListIndicator = Project.Variables.ImportGlossary.Value("ListIndicator");
        edit.Keys("<type>" + ListIndicator + "</type>");
        edit.Keys("[Enter]");
  
        edit.Keys(Project.Variables.ImportGlossary.Value("XMLPart6"));
        edit.Keys("[Enter]");
        
        if((Project.Variables.ImportGlossary.Value("TestValueUpdate")) == "Yes")
        {
          edit.Keys(Project.Variables.ImportGlossary.Value("TestValueTag"));
          edit.Keys("[Enter]");        
        }
        
        edit.Keys(Project.Variables.ImportGlossary.Value("XMLPart7"));
        
        wndNotepad.MainMenu.Click("File|Save As...");
        let dlgSaveAs = notepad.dlgSaveAs;
        dlgSaveAs.DUIViewWndClassName.DirectUIHWND.FloatNotifySink.ComboBox.SetText((Project.Path+"Import Files\\"+Project.Variables.ImportGlossary.Value("Import File Name") + ".xml"));
        dlgSaveAs.btnSave.ClickButton();
        if((notepad.dlgConfirmSaveAs.DirectUIHWND.CtrlNotifySink.btnYes).Exists)
        {
            notepad.dlgConfirmSaveAs.DirectUIHWND.CtrlNotifySink.btnYes.ClickButton();
        }
        wndNotepad.Close();

    }                
                  
                
    Aliases.browser.pageSapiensDecision.FindElement(ORRepository.importGlossary).ClickButton();
                
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement(ORGeneric.dcnDialog+"//h1"), "contentText", cmpEqual, "Import Glossary to WORLD");
      
    Aliases.browser.pageSapiensDecision2.FindElement(ORGeneric.dcnDialog+"//*[@value='Browse']").ClickButton();
         
    Aliases.browser.WaitAliasChild("dlgOpen", 10000).OpenFile((Project.Path+"Import Files\\"+Project.Variables.ImportGlossary.Value("Import File Name"))+ ".xml", "Custom Files (*.xml;*.csv)");

    if (Project.Variables.ImportGlossary.Value("AllowUpdateSOR") == "Yes")
    {          
      Aliases.browser.pageSapiensDecision2.form4.panel9.Click(); 
    }
      
    Aliases.browser.pageSapiensDecision2.form4.buttonStartImport.ClickButton();
      
    if (Aliases.browser.pageSapiensDecision2.form4.textnodeNew1NewVersions0Changed0.linkNew1.textnodeNew1.WaitProperty("Exists", true, 50000))
    {
      if(Project.Variables.ImportGlossary.Value("Checkpoint Enabled Tab") == "New")
      {
        let NewTab = Aliases.browser.pageSapiensDecision.FindElement(ORRepository.specImportGlossary+"//ul//li[1][@role='presentation']");
        NewTab.Click();
        if((NewTab.getAttribute("class")).includes("p-highlight")) 
        {
          Tabs_Verification.NewTabVerification(FTName);
        }
        else 
        {
          Log.Error("Fails");
        }
      }
      else if(Project.Variables.ImportGlossary.Value("Checkpoint Enabled Tab") == "New Version")
      {
        let NewVersionTab = Aliases.browser.pageSapiensDecision.FindElement(ORRepository.specImportGlossary+"//ul//li[2][@role='presentation']");
        NewVersionTab.Click();
                    
        if((NewVersionTab.getAttribute("class")).includes("p-highlight")) 
        {
          Tabs_Verification.NewVersionTabVerification(FTName);
        }
        else 
        {
          Log.Error("Fails");
        } 
                    
      }
      else if(Project.Variables.ImportGlossary.Value("Checkpoint Enabled Tab") == "Changed")
      {
        let ChangedTab = Aliases.browser.pageSapiensDecision.FindElement(ORRepository.specImportGlossary+"//ul//li[3][@role='presentation']");
        ChangedTab.Click();
                    
        if((ChangedTab.getAttribute("class")).includes("p-highlight")) 
        {
          Tabs_Verification.ChangedTabVerification(FTName);
        }
        else
        {
          Log.Error("Fails");
        }
                    
      }
      else if(Project.Variables.ImportGlossary.Value("Checkpoint Enabled Tab") == "Import Error")
      {
        let ImportErrorTab = Aliases.browser.pageSapiensDecision.FindElement(ORRepository.specImportGlossary+"//ul//li[4][@role='presentation']");
        ImportErrorTab.Click();
                    
        if((ImportErrorTab.getAttribute("class")).includes("p-highlight")) 
        {
          Tabs_Verification.ImportErrorsTabVerifications(FTName);
        }
        else
        {
          Log.Error("Fails");
        }
      }
      else if(Project.Variables.ImportGlossary.Value("Checkpoint Enabled Tab") == "Unchanged")
      {
        let UnchangedTab = Aliases.browser.pageSapiensDecision.FindElement(ORRepository.specImportGlossary+"//ul//li[5][@role='presentation']");
        UnchangedTab.Click();
                    
        if((UnchangedTab.getAttribute("class")).includes("p-highlight")) 
        {
          Tabs_Verification.UnchangedTabVerification(FTName)
        }
        else
        {
          Log.Error("Fails");
        }
      }
    }
      
    let TotalFactTypeImport = Aliases.browser.pageSapiensDecision2.FindElement(ORGeneric.dcnDialog+"//*[@class='spec-import-glossary__analysis__fact-types-selection__selected-sum']").textContent;
      
    if (TotalFactTypeImport > 0)
    {
            
      Aliases.browser.pageSapiensDecision2.FindElement(ORGeneric.dcnDialog+"//button[text()=' Import ']").ClickButton();
      let ToasterOne = Aliases.browser.pageSapiensDecision.FindElement("//div[text()='Import Glossary process has started']");                  
      aqObject.CheckProperty(ToasterOne, "contentText", cmpEqual, "Import Glossary process has started");
      //ToasterOne.Click();
                          
      Delay(2000);
                  
      let hasNext = true
  
      do
      {
                  
          if(Aliases.browser.pageSapiensDecision.FindElement("//button[text()=' Import Glossary ']").hasAttribute("disabled") == false)
          {
            let Toastertwo = Aliases.browser.pageSapiensDecision.FindElement("//div[contains(text(),'Fact Types were imported')]");  
            Log.Message((Toastertwo).textContent);
            Log.Message("File Successfully Imported.");
            hasNext = false;
          }  
          else 
          {
            hasNext = true;
          }
      }while(hasNext == true)
        
      Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Glossary (Fact Types)']").Click;
      let SearchFactType = Aliases.browser.pageSapiensDecision.FindElement("//input[@name='searchInput']");
      //SearchFactType.Click();
      SearchFactType.SetText(FTName);
                
      Delay(2000);
        
      Aliases.browser.pageSapiensDecision.FindElement("//a[contains(text(),'"+ FTName +"')]").Click();
        
      let FactTypeVersion = "Fact Type Summary: " + FTName+" [V"+ Project.Variables.ImportGlossary.Value("Checkpoint FT Version") +"]";
      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, FactTypeVersion);
        
      let FactTypeName = Aliases.browser.pageSapiensDecision.FindElement("//*[@name='name']");
      aqObject.CheckProperty(FactTypeName, "Text", cmpEqual, FTName);
        
      Aliases.browser.pageSapiensDecision.form.buttonOk.Click();
        
      SearchFactType.SetText("");
    }
    else if(TotalFactTypeImport == 0)
    {
      Log.Message("No Fact Types to Import.");
      Aliases.browser.pageSapiensDecision.form.buttonCancel.Click();
    }
      
  }    
    
aqTestCase.End();   
Project.Variables.ImportGlossary.Next();  
}   
    
}
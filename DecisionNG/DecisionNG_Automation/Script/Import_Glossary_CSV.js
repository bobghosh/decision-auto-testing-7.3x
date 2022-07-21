var Tabs_Verification = require("Tabs_Verification");
function Import_Glossary_CSV_Verification()
{
  let FTName, SORID;
      
  Project.Variables.ImportGlossary_CSV.Reset();
  
  for(; !Project.Variables.ImportGlossary_CSV.IsEOF();)
  {                
    if(Project.Variables.ImportGlossary_CSV.Value("Test Case Execution") == "Yes")
    {
      aqTestCase.Begin(Project.Variables.ImportGlossary_CSV.Value("Test Case Number") + "_" + Project.Variables.ImportGlossary_CSV.Value("TestCaseName"));
      
      if(Project.Variables.ImportGlossary_CSV.Value("FactTypeNameUpdate") == "Yes")
      {              
        let uniqueValue = Date.now();
        var timestamp = new Date();
        FTName = "FTName " + timestamp.getMilliseconds().toString() + timestamp.getHours().toString() + uniqueValue + timestamp.getMinutes().toString();
        Log.Message(FTName);                
      }
      else if (Project.Variables.ImportGlossary_CSV.Value("FactTypeNameUpdate") == "No")
      {   
        Log.Message(FTName);
      }
      
      if((Project.Variables.ImportGlossary_CSV.Value("SORIDUpdate")) == "Yes")
      {
        let numberunique = Date.now()
        var UniqueSORID = new Date();
        SORID = "ab" + UniqueSORID.getMilliseconds().toString() +"csv" + UniqueSORID.getHours().toString() + numberunique;
        Log.Message(SORID);         
      }
      else if((Project.Variables.ImportGlossary_CSV.Value("SORIDUpdate")) == "Empty")
      {
          SORID = "";           
          Log.Message(SORID);
      }
      else if((Project.Variables.ImportGlossary_CSV.Value("SORIDUpdate")) == "No")
      {
              //Project.Variables.ImportGlossary.Reset();   
              Log.Message(SORID);   
      }
      
       if(Project.Variables.ImportGlossary_CSV.Value("File Creation") == "Yes")
      {   
            TestedApps.EXCEL.Run(1, true);
            let book = Aliases.EXCEL.wndXLMAIN.XLDESK.Book5;
            let excel = Aliases.EXCEL;
            let wndExcel = excel.wndExcel;
            let netUIHWND = wndExcel.FullpageUIHost.NetUIHWND;
            Delay(500);
            netUIHWND.Click(249, 190);
            let xldesk = wndExcel.XLDESK;
            let book1 = xldesk.Book1;
            Delay(500);
            if(book1.Exists == true)
            {
            book1.Click(60, 34);
            }
    
            Delay(500);
  
            let excel6 = xldesk.EXCEL6;
  
            //File Header - DM_Fact_Type_Name
            book1.Keys("DM_Fact_Type_Name");
            excel6.Keys("[Enter]");
            book1.Keys(FTName);
            excel6.Keys("[Right][Up]");
//            excel6.Keys("[Up]");
                  
            if(Project.Variables.ImportGlossary_CSV.Value("DescriptionUpdate") == "Yes")
            {      
            //Header - Fact_Type_Definition
            book1.Keys("Fact_Type_Definition");
            excel6.Keys("[Down]");
            book1.Keys(Project.Variables.ImportGlossary_CSV.Value("Fact_Type_Definition"));
            excel6.Keys("[Right][Up]");
            }
//            excel6.Keys("[Up]");
            if(Project.Variables.ImportGlossary_CSV.Value("HighLevelCategory") == "Yes")
            {
            //Header - Business Term High-Level Category
            book1.Keys("Business Term High-Level Category");
            excel6.Keys("[Down]");
            book1.Keys(Project.Variables.ImportGlossary_CSV.Value("Business Term High Level Category"));
            excel6.Keys("[Right][Up]");
            }
            
            //Header - System Of Record Name
            book1.Keys("System Of Record Name");
            excel6.Keys("[Down]");
            book1.Keys(Project.Variables.ImportGlossary_CSV.Value("SORName"));
            excel6.Keys("[Right][Up]");
            
            //Header - System Of Record Id
            book1.Keys("System Of Record Id");
            excel6.Keys("[Down]");
            book1.Keys(SORID);
            excel6.Keys("[Right][Up]");
            
            //Header - Externally Managed
            book1.Keys("Externally Managed");
            excel6.Keys("[Down]");
            book1.Keys(Project.Variables.ImportGlossary_CSV.Value("Externally Managed"));
            excel6.Keys("[Right][Up]");
            
            //Header - Format
            book1.Keys("Format");
            excel6.Keys("[Down]");
            book1.Keys(Project.Variables.ImportGlossary_CSV.Value("Format"));
            excel6.Keys("[Right][Up]");
            
            //Header - Domain Type
            book1.Keys("Domain Type");
            excel6.Keys("[Down]");
            book1.Keys(Project.Variables.ImportGlossary_CSV.Value("Domain Type"));
            excel6.Keys("[Right][Up]");
            
            if(Project.Variables.ImportGlossary_CSV.Value("ExternalSetUpdate") == "Yes")
            { 
            //Header - Domain External Set Instance
              book1.Keys("Domain External Set Instance");
              excel6.Keys("[Down]");
              book1.Keys(Project.Variables.ImportGlossary_CSV.Value("Domain External Set Instance"));
              excel6.Keys("[Right][Up]");
            }
            
            if(Project.Variables.ImportGlossary_CSV.Value("DomainRangeUpdate") == "Yes")
            {
            //Header - Domain Range
            book1.Keys("Domain Range");
            excel6.Keys("[Down]");
            book1.Keys(Project.Variables.ImportGlossary_CSV.Value("Domain Range"));
            excel6.Keys("[Right][Up]");
            }
            
            if(Project.Variables.ImportGlossary_CSV.Value("DomainValueUpdate") == "Yes")
            {
            //Header - Domain Values
            book1.Keys("Domain Values");
            excel6.Keys("[Down]");
            book1.Keys(Project.Variables.ImportGlossary_CSV.Value("Domain Values"));
            excel6.Keys("[Right][Up]");
            }

            if(Project.Variables.ImportGlossary_CSV.Value("TestValueUpdate") == "Yes")
            {
            //Header - Test Values
            book1.Keys("Test Values");
            excel6.Keys("[Down]");
            book1.Keys(Project.Variables.ImportGlossary_CSV.Value("Test Values"));
            excel6.Keys("[Right][Up]");
            }
            
            if(Project.Variables.ImportGlossary_CSV.Value("TestValueUpdate") == "Yes")
            {
            //Header - Test Values
            book1.Keys("Test Values");
            excel6.Keys("[Down]");
            book1.Keys(Project.Variables.ImportGlossary_CSV.Value("Test Values"));
            excel6.Keys("[Right][Up]");
            }
            
            if(Project.Variables.ImportGlossary_CSV.Value("SynonymsUpdate") == "Yes")
            {
            //Header - synonyms
            book1.Keys("synonyms");  
            excel6.Keys("[Down]");
            book1.Keys(Project.Variables.ImportGlossary_CSV.Value("synonyms"));
            excel6.Keys("[Right][Up]");  
            } 
            
            if(Project.Variables.ImportGlossary_CSV.Value("DisplayFormatUpdate") == "Yes")
            {
            //Header - Display Format
            book1.Keys("Display Format"); 
            excel6.Keys("[Down]");
            book1.Keys(Project.Variables.ImportGlossary_CSV.Value("Display Format"));
            }       
              excel6.Keys("^s");
              netUIHWND.Click(330, 476);
              let dlgSaveAs = excel.dlgSaveAs;
              let directUIHWND = dlgSaveAs.DUIViewWndClassName.DirectUIHWND;
              directUIHWND.FloatNotifySink.ComboBox.SetText("C:\\Users\\Varsha.Chitray\\Desktop\\Import Glossary CSV\\"+Project.Variables.ImportGlossary.Value("Import File Name"));
              directUIHWND.FloatNotifySink2.ComboBox.ClickItem("CSV UTF-8 (Comma delimited) ");
              dlgSaveAs.btnSave.ClickButton();
    
              if((Aliases.EXCEL.dlgConfirmSaveAs).Exists)
              {
                  Aliases.EXCEL.dlgConfirmSaveAs.DirectUIHWND.CtrlNotifySink.btnYes.ClickButton();
              } 
    
//              Delay(1000)
              Aliases.EXCEL.wndXLMAIN4.Close();
//              wndExcel.Close();
              
          }
          
                Aliases.browser.pageSapiensDecision.FindElement("//button[text()=' Import Glossary ']").ClickButton();
                
                aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//h1"), "contentText", cmpEqual, "Import Glossary to WORLD");
      
                Aliases.browser.pageSapiensDecision2.FindElement("//dcn-dialog//button[text()='Browse']").ClickButton();
         
                Aliases.browser.dlgOpen.OpenFile(("C:\\Users\\Varsha.Chitray\\Desktop\\Import Glossary CSV\\"+Project.Variables.ImportGlossary.Value("Import File Name")), "Custom Files");

                if (Project.Variables.ImportGlossary_CSV.Value("AllowUpdateSOR") == "Yes")
                {          
                  Aliases.browser.pageSapiensDecision2.form4.panel9.Click(); 
                }
      
                Aliases.browser.pageSapiensDecision2.form4.buttonStartImport.ClickButton();
      
                if (Aliases.browser.pageSapiensDecision2.form4.textnodeNew1NewVersions0Changed0.linkNew1.textnodeNew1.WaitProperty("Exists", true, 50000))
                {
                  if(Project.Variables.ImportGlossary_CSV.Value("Checkpoint Enabled Tab") == "New")
                  {
                    let NewTab = Aliases.browser.pageSapiensDecision.FindElement("//div[@class='import-glossary__analysis spec-import-glossary__analysis ng-star-inserted']//ul//li[1][@role='presentation']");
                    NewTab.Click();
                    if((NewTab.getAttribute("class")).includes("ui-state-active")) 
                    {
                      Tabs_Verification.NewTabVerification(FTName);
                    }
                    else 
                    {
                      Log.Error("Fails");
                    }
                  }
                  else if(Project.Variables.ImportGlossary_CSV.Value("Checkpoint Enabled Tab") == "New Version")
                  {
                    let NewVersionTab = Aliases.browser.pageSapiensDecision.FindElement("//div[@class='import-glossary__analysis spec-import-glossary__analysis ng-star-inserted']//ul//li[2][@role='presentation']");
                    NewVersionTab.Click();
                    
                    if((NewVersionTab.getAttribute("class")).includes("ui-state-active")) 
                    {
                      Tabs_Verification.NewVersionTabVerification(FTName);
                    }
                    else 
                    {
                      Log.Error("Fails");
                    } 
                    
                  }
                  else if(Project.Variables.ImportGlossary_CSV.Value("Checkpoint Enabled Tab") == "Changed")
                  {
                    let ChangedTab = Aliases.browser.pageSapiensDecision.FindElement("//div[@class='import-glossary__analysis spec-import-glossary__analysis ng-star-inserted']//ul//li[3][@role='presentation']");
                    ChangedTab.Click();
                    
                    if((ChangedTab.getAttribute("class")).includes("ui-state-active")) 
                    {
                      Tabs_Verification.ChangedTabVerification(FTName);
                    }
                    else
                    {
                      Log.Error("Fails");
                    }
                    
                  }
                  else if(Project.Variables.ImportGlossary_CSV.Value("Checkpoint Enabled Tab") == "Import Error")
                  {
                    let ImportErrorTab = Aliases.browser.pageSapiensDecision.FindElement("//div[@class='import-glossary__analysis spec-import-glossary__analysis ng-star-inserted']//ul//li[4][@role='presentation']");
                    ImportErrorTab.Click();
                    
                    if((ImportErrorTab.getAttribute("class")).includes("ui-state-active")) 
                    {
                      Tabs_Verification.ImportErrorsTabVerifications(FTName);
                    }
                    else
                    {
                      Log.Error("Fails");
                    }
                  }
                  else if(Project.Variables.ImportGlossary_CSV.Value("Checkpoint Enabled Tab") == "Unchanged")
                  {
                    let UnchangedTab = Aliases.browser.pageSapiensDecision.FindElement("//div[@class='import-glossary__analysis spec-import-glossary__analysis ng-star-inserted']//ul//li[5][@role='presentation']");
                    UnchangedTab.Click();
                    
                    if((UnchangedTab.getAttribute("class")).includes("ui-state-active")) 
                    {
                      Tabs_Verification.UnchangedTabVerification(FTName)
                    }
                    else
                    {
                      Log.Error("Fails");
                    }
                  }
                }
      
                let TotalFactTypeImport = Aliases.browser.pageSapiensDecision2.FindElement("//dcn-dialog//*[@class='spec-import-glossary__analysis__fact-types-selection__selected-sum']").textContent;
      
                if (TotalFactTypeImport > 0)
                {
            
                  Aliases.browser.pageSapiensDecision2.FindElement("//dcn-dialog//button[text()=' Import ']").ClickButton();
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
        
                  let FactTypeVersion = "Fact Type Summary: " + FTName+" [V"+ Project.Variables.ImportGlossary_CSV.Value("Checkpoint FT Version") +"]";
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
        Project.Variables.ImportGlossary_CSV.Next();  
  }

}
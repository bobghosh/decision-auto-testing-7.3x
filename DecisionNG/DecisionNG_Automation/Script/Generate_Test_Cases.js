function Generate_Test_Cases(SelectAll, SelectTestValues, numberOfTestCasesGenerated)
{
//  let SelectAll = "Yes";
 // let SelectTestValues = "";
  
 
  //Generate Button on Test Group Page
  if (Aliases.browser.pageSapiensDecision2.buttonGenerate.Enabled == true)
  {  
            Aliases.browser.pageSapiensDecision2.buttonGenerate.ClickButton();
    
            Delay(100);
    
            //Generate Test Case Pop up
            aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.form4.panel21, "contentText", cmpEqual, "Generate Test Cases");
    
            //Generate Test Values Button on Pop up
            Aliases.browser.pageSapiensDecision2.form4.buttonGenerateTestValues.ClickButton(); 
            
            //Wait for pop up to be enabled
            Aliases.browser.pageSapiensDecision.FindElement("//div[@class='spec-body mat-dialog-content']/div").WaitProperty("class","dialogbody", 100000)
                        
//            Aliases.browser.pageSapiensDecision.form.buttonCancel.WaitProperty("Exists", true, 100000)  

            //Click on Select Test Value button  
            Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'Select Test Values')]").ClickButton();
        
            //If All the Checkboxes needs to be selected
            if(SelectAll == "Yes")
            {      
                    let SelectAllcheckbox = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'multi-selectable-checkbox__header')]//*[contains(@class,'ui-chkbox-box')]");
                    if(SelectAllcheckbox.getAttribute("class").includes("ui-state-active"))
                	  {
                      SelectAllcheckbox.click();
                      //NewFactTypecheckbox.click();
                      Log.Checkpoint("All Values are Selected"); 
                    }             			          
                    else
                    {
                          SelectAllcheckbox.click();
                          Log.Message("Vaues are already Selected");
                    }
      
              }
              //If specific Checkboxes needs to be selected      
              else if(SelectAll != "Yes")
              {
      //          var SelectTestValues = "NULL,Space"
                var SelectTestValue = SelectTestValues.split(',');
        
                for(var i = 0; i <=SelectTestValue.length ; i++ )
                {
          
                  let SelectValues = Aliases.browser.pageSapiensDecision.FindElements("//dcn-multi-selectable-checkbox//ul//li");
          
                  for(var j =1; j <=SelectValues.length ; j++)
                  {
                    if ((Aliases.browser.pageSapiensDecision.FindElement("//dcn-multi-selectable-checkbox//ul//li[" +j+"]").textContent).includes(SelectTestValue[i]))
                    {
                       let SelectCheckbox = Aliases.browser.pageSapiensDecision.FindElement("//dcn-multi-selectable-checkbox//ul//li[" +j+"]//div[contains(@class,'p-component')]");
                      if(SelectCheckbox.getAttribute("class").includes("checked")) //ui-state-active
                  	  {
                            Log.Checkpoint("All Values are Selected"); 
                      }             			          
                      else
                      {
                            SelectCheckbox.click();
                            Log.Message("Vaues are already Selected");
                      }
                    }   
                  }
                }       
            }  
  
            Aliases.browser.pageSapiensDecision2.buttonApply.ClickButton();  
              
//            }
      
            //Possible Test Cases combinations 
            let messages = Aliases.browser.pageSapiensDecision.FindElement("//*[@class='dialogbody']//*[contains(@class,'u-margin-left--full')]").textContent;
            
            Log.Message(messages);
            
            let msg = messages.split(" ");
            Log.Message("Possible Test Cases Combinations - "+msg[1]);

    //        let numberOfTestCasesGenerated;

            Log.Message("Number of Test Cases Entered "+ numberOfTestCasesGenerated);
       
            Aliases.browser.pageSapiensDecision.FindElement("//*[@name='tc-number']").WaitProperty("Enabled", true, 100000);
            
            Delay(200);
            
            Aliases.browser.pageSapiensDecision.FindElement("//*[@name='tc-number']").SetText(numberOfTestCasesGenerated);

//            Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
            
            Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
            
            Aliases.browser.pageSapiensDecision2.panel25.WaitProperty("Exists",false,100000);
            
            Delay(1000);
//            Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]"),10000);
        
            
      
            let Paginator;
    
            if(Aliases.browser.pageSapiensDecision.FindElements("//dcn-paginator//p-paginator/div").length > 0)
            {
              Paginator = "Yes";
            }
            else
            {
              Paginator = "No";
            }
    
//              Log.Message(Aliases.browser.pageSapiensDecision.FindElements("//dcn-paginator//p-paginator/div").length);
//              Log.Message(Paginator);
    
            let hasNext = "true";
  
            let TotalCount = 0;
  
            do{
  
                  ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
    
                  Delay(200);
          
                  TotalCount = TotalCount + ItemCount.length;
          
                  if(Paginator == "Yes")
                  {
                    if(Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").getAttribute("class").includes("ui-state-disabled"))
                    { 
                      hasNext = "false";
                    }
                    else
                    {
                      Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").click();         
                    }
                  }
                  else
                  {
                    hasNext = "false";
                  }
      

            }while(hasNext == "true")
    
            if(Paginator == "Yes")
            {
              if(!Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'ui-paginator-first')]").getAttribute("class").includes("ui-state-disabled"))
              {    
                Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'ui-paginator-first')]").click(); 
              }    
            }
      
            Log.Message("Number of Test Cases Generated "+TotalCount);
        
           
            if(TotalCount == numberOfTestCasesGenerated)
            {
              Log.Message("Pass")
            }
            else
            {
              Log.Message("Fail" + numberOfTestCasesGenerated)
            } 
          
    
  }
  else
  {
    Log.Error("Generate Button is disabled");
  }
       
 
}



var SelectingDate_Time_FromCalendar = require("SelectingDate_Time_FromCalendar");
var SelectingTimeFromDropDown = require("SelectingTimeFromDropDown");
//var SelectingOptionfromDropDown = require("SelectingOptionfromDropDown_Only1DDexsists");
var SelectingOptionfromDropDown = require("SelectingOptionfromDropDown_Role");
var StringMultipleInput = require("DetailsTab_testValues_StringMultipleInput");
 var SelectingDateFromCalendar = require("SelectingDateFromCalendar");
 
function FactTypeTab_FactTypeSummary_DetailsTab_Verify()
{
  
  //FactTypeSummary Page in Details Tab

  let browser = Aliases.browser;
  let page = browser.pageSapiensDecision2;
  
  page.textnodeFactTypeSummary.Click();
  Delay(2000)

  let DataType= OCR.Recognize(Aliases.browser.pageSapiensDecision.form.form2.form4.textbox6).FullText;
  Log.Message("Datatype is " +DataType)
  const Reg=/^DataType$/
  let DisplayFormat= OCR.Recognize( Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2).FullText;
  Log.Message("DisplayFormat is " +DisplayFormat)
  
  aqObject.CheckProperty(page.panel3, "Exists", cmpEqual, true);//laundaryline
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textboxName2, "Enabled", cmpEqual, true);
  
   let textNode = Aliases.browser.pageSapiensDecision.form.form2.form3;
  
  let SingleValueClassName=textNode.textnodeSingleValue.FindElement("//p-selectbutton//div[@aria-label='Single Value']").getAttribute('class');
  
  let MultipleValuesClassName=textNode.textnodeMultipleValues.FindElement("//p-selectbutton//div[@aria-label='Multiple Values']").getAttribute('class');
  
  //Log.Message(SingleValueClassName)
  //Log.Message(MultipleValuesClassName)
  
  if(! SingleValueClassName.includes('ui-state-disabled') )
  {
    Log.Checkpoint("Single Value is in active state")
  }
  else
  {
    Log.Error("Single Value is in inactive state")
  }

  if(! MultipleValuesClassName.includes('ui-state-disabled') )
  {
    Log.Checkpoint("Multiple Value is in active state")
  }
  else
  {
  Log.Error("Multiple Value is in inactive state")  
  }
   
  
  let textarea = browser.pageSapiensDecision.form.form2;
  
  aqObject.CheckProperty(textarea.form3.textareaDescription, "Enabled", cmpEqual, true);
  
  let textbox = textarea.form4;
  aqObject.CheckProperty(textbox.textbox, "Enabled", cmpEqual, true);//datatype
  
  aqObject.CheckProperty(textbox.textbox2, "Enabled", cmpEqual, true);//format
  
  aqObject.CheckProperty(textbox.textbox3, "Enabled", cmpEqual, true);//allowed
  
  let Allowedvalue=OCR.Recognize(Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3).FullText;
  Log.Message(Allowedvalue);
  
  ////if allowed vlues is Any Values then perform below validation check
  
  if(Allowedvalue.includes("Any Value"))
  {  
    
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.form4.numberinputLength, "Enabled", cmpEqual, true);//Maxlength
  
  }
  //if allowed vlues is Range then perform below validation check
  
  if(Allowedvalue.includes("Range"))
  {  
    
  let form = browser.pageSapiensDecision2.formF.form2;
  
  aqObject.CheckProperty(form.cell, "Exists", cmpEqual, true);//from
  
  aqObject.CheckProperty(form.cell2, "Exists", cmpEqual, true);//to
  
  textbox = browser.pageSapiensDecision.form.form2.form4;
  
  aqObject.CheckProperty(textbox.textbox4, "Enabled", cmpEqual, true);//fromtextbox
  
  aqObject.CheckProperty(textbox.textbox5, "Enabled", cmpEqual, true);//totextbox
  
  }


  
  //MoreDetails Tab
  Aliases.browser.pageSapiensDecision2.textnodeMoreDetails.Click();
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.buttonValidate, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.textnodeDraft, "contentText", cmpEqual, "DRAFT");
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName, "Text", cmpEqual, "ATR");
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.formF.textboxSorName, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.formF.textboxSorId, "Enabled", cmpEqual, false);
  
  //Selecting date Testvalues
  if(DataType.includes("Month & year")||DataType.includes("Date"))
  {
   
    SelectingDateFromCalendar.CalendarSelection();
  }
  
  //To input the sting in the testvalues textbox
  else if (DataType.includes("Code")||DataType.includes("Text")||DataType.includes("Enumerator")||DataType.includes("Identifier")||DataType.includes("Indicator")||DataType.includes("Name"))
      {
        StringMultipleInput.StringMultipleInput();
      }
  //To input the numbers in the testvalues textbox    
  else if (DataType.includes("Amount")||DataType.includes("Basis points ")||DataType.includes("Numeric")||DataType.includes("Percent")||DataType.includes("Quantity")||DataType.includes("Year"))
      {
        StringMultipleInput.NumericMultipleInput();
      }     
  else if(DataType.includes("Day")||DataType.includes("Month")) 
      {
        if(DisplayFormat.includes("Day of the month")||DisplayFormat.includes("Month Short"))
        {
       
        Project.Variables.Details_TestValues_DropDown_Numbers.Iterator.Reset();
        
        for(; !Project.Variables.Details_TestValues_DropDown_Numbers.Iterator.IsEOF();)
        {
        SelectingOptionfromDropDown.SelectingOptionfromDropdown(Project.Variables.Details_TestValues_DropDown_Numbers.Iterator.Value("TestValues"))
        
        Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
        
        Project.Variables.Details_TestValues_DropDown_Numbers.Iterator.Next();
        }
          
        }
        if(DisplayFormat.includes("Day of the week short"))
        {
          Project.Variables.Details_TestValues_DayOfWeekShort.Iterator.Reset();
        
        for(; !Project.Variables.Details_TestValues_DayOfWeekShort.Iterator.IsEOF();)
        {
        SelectingOptionfromDropDown.SelectingOptionfromDropdown(Project.Variables.Details_TestValues_DayOfWeekShort.Iterator.Value("TestValues"))
        
        Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
        
        Project.Variables.Details_TestValues_DayOfWeekShort.Iterator.Next();
        }
        }
        if(DisplayFormat.includes("Day of the week long"))
        {
          
        Project.Variables.Details_testValues_Dayoftheweeklong.Iterator.Reset();
        
        for(; !Project.Variables.Details_testValues_Dayoftheweeklong.Iterator.IsEOF();)
        {
        SelectingOptionfromDropDown.SelectingOptionfromDropdown(Project.Variables.Details_testValues_Dayoftheweeklong.Iterator.Value("TestValues"))
        
        Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
        
        Project.Variables.Details_testValues_Dayoftheweeklong.Iterator.Next();
        }
        }
        if(DisplayFormat.includes("Month Long"))
        {
          
        Project.Variables.Details_testValues_MonthLong.Iterator.Reset();
        
        for(; !Project.Details_testValues_MonthLong.Iterator.IsEOF();)
        {
        SelectingOptionfromDropDown.SelectingOptionfromDropdown(Project.Variables.Details_testValues_MonthLong.Iterator.Value("TestValues"))
        
        Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
        
        Project.Variables.Details_testValues_MonthLong.Iterator.Next();
        }
        }
      }
      else if(DataType.includes(" & Time"))
      { 
        SelectingDate_Time_FromCalendar.SelectingDateAndTime("6:15 AM")
        
      }
  }

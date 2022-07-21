function StringMultipleInput()
{
  Project.Variables.Details_TestValues_StringValues.Iterator.Reset();
  for(; !Project.Variables.Details_TestValues_StringValues.Iterator.IsEOF();)
    {
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.Click();
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.Keys(Project.Variables.Details_TestValues_StringValues.Iterator.Value('TestValues'));
    //Delay(1000)
    Aliases.browser.pageSapiensDecision2.formF.textboxSorId.Click();
    Aliases.browser.pageSapiensDecision.button6.ClickButton();
    Project.Variables.Details_TestValues_StringValues.Iterator.Next();
    }  
}
module.exports.StringMultipleInput = StringMultipleInput;

function NumericMultipleInput()
{
  Project.Variables.Details_TestValues_NumericValues.Iterator.Reset();
  for(; !Project.Variables.Details_TestValues_NumericValues.Iterator.IsEOF();)
    {
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.Click();
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.Keys(Project.Variables.Details_TestValues_NumericValues.Iterator.Value('TestValues'));
    //Delay(1000)
    Aliases.browser.pageSapiensDecision2.formF.textboxSorId.Click();
    Aliases.browser.pageSapiensDecision.button6.ClickButton();
    Project.Variables.Details_TestValues_NumericValues.Iterator.Next();
    }  
}
module.exports.NumericMultipleInput = NumericMultipleInput;
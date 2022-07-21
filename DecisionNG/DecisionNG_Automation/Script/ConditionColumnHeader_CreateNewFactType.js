//USEUNIT WaitElement_ispresent
//USEUNIT SelectingOptionfromDropDown_Role

var Generate_Random_Number = require("Generate_Random_Number");

function ConditionColumnHeader_InsertColumn_CreateNewFactType(FactTypeName)
{
     let page = Aliases.browser.pageSapiensDecision2;
     let randomNumber = Generate_Random_Number.randomNumber()
     page.FindElement("//*[@placeholder='column name']").keys(FactTypeName+randomNumber);
     factTypeName = FactTypeName+randomNumber
     dropDownVal = "Create New Fact Type \""+factTypeName+"\""
     Wait_Until_Element_ispresent("//span[text()='"+dropDownVal+"'"+"]")
     page.FindElement("//*[@placeholder='column name']").keys("[Tab]")
     
}

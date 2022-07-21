//USEUNIT WaitElement_ispresent
//USEUNIT SelectingOptionfromDropDown_Role

var Generate_Random_Number = require("Generate_Random_Number");

function ConclusionHeader_InsertColumn_CreateNewFactType(FactTypeName)
{
     let page = Aliases.browser.pageSapiensDecision2;
     let randomNumber = Generate_Random_Number.randomNumber()
     page.FindElement("//*[@placeholder='column name']").keys(FactTypeName+randomNumber);
     factTypeName = FactTypeName+randomNumber
     dropDownVal = "Create New Fact Type \""+factTypeName+"\""
     Wait_Until_Element_ispresent("//span[text()='"+dropDownVal+"'"+"]")
     page.FindElement("//*[@placeholder='column name']").keys("[Tab]")
     
}

function ConclusionHeader_AddMessageCategory_CreateNewFactType(rowNumber,FactTypeName)
{
    let page = Aliases.browser.pageSapiensDecision2;
    page.FindElement("(//dcn-rule-message-cell)["+rowNumber+"]").DblClick();
    page.FindElement("//dcn-combo-box//button").Click();
    Delay(2000)
    SelectingOptionfromDropdown("% - Fact Type","No");
    let randomNumber = Generate_Random_Number.randomNumber()
    factTypeName = FactTypeName+randomNumber
    dropDownVal = "Create New Fact Type \""+factTypeName+"\""
    page.FindElement("//dcn-fact-type-message-element-editor//input").keys(factTypeName);
    Wait_Until_Element_ispresent("//span[text()='"+dropDownVal+"'"+"]")             
    page.FindElement("//dcn-fact-type-message-element-editor//input").keys("[Tab]")
    page.FindElement("//button[contains(@class,'spec-icon-add')]").Click();
    page.FindElement("//div[contains(@class,'conclusionHeader')]").Click();
}
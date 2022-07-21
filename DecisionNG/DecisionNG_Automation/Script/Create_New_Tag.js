var WaitElement_ispresent = require("WaitElement_ispresent");
var Buttons_Actions = require("Buttons_Actions");
var Generate_Random_Number = require("Generate_Random_Number");
var Revision_Buttons = require("Revision_Buttons");
function Create_New_Tag(TagName)
{
  let tagUntagBtn = Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Refresh ']//parent::span//following-sibling::span[1]")
  let tagUntagText = tagUntagBtn.textContent.trim();
 if(tagUntagText == "Untag")
  {
    tagUntagBtn.Click()
    Buttons_Actions.okButtonClick();
    Delay(1000)
    WaitElement_ispresent.Wait_Until_Element_ispresent("//*[text()='Deploy ']")
  }
  
  Revision_Buttons.Tag_button().Click(); 
  
  //Verify the Create New Tag pop up and enter the Tag Name
  //  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Create New Tag");
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//h1"), "contentText", cmpEqual, "Create New Tag");
  let randomNumber = Generate_Random_Number.randomNumber()
  Aliases.browser.pageSapiensDecision.FindElement("//*[@name='tagName']").SetText(TagName+randomNumber);
  
  Delay(500);
  //Aliases.browser.pageSapiensDecision.FindElement("//button[@class='btn primary spec-confirmed']").Click();
//  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
  Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
        
  
  //Verify the TagName in the breadcrumb
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.linkTest23Latest.textnodeTest23Latest, "contentText", cmpContains, TagName, false);

  Project.Variables.Tag_Name = TagName+randomNumber;
}
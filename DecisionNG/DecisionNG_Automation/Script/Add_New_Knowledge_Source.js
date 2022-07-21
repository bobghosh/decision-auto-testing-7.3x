var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");
var SelectingOptionfromDropDown_Only1DDexsists = require("SelectingOptionfromDropDown_Only1DDexsists");
var Assets_Ellipses_Options = require("Assets_Ellipses_Options");

//Add New Knowledge Source which is not available in the application
function Add_Knowledge_Source()
{
  
  let knowledgeSourceName = "KS13";  

  //User should be on Asset Screen
  //Click on Ellipse to Open Knowledge Source pop up
  //Verify the pop up heading should contains Associated Knowledge Sources
  Assets_Ellipses_Options.Assets_Ellipses_Options("Knowledge Source");
    
  let knowledgeSourceTextbox = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//p-autocomplete//input"); 
  knowledgeSourceTextbox.SetText(knowledgeSourceName);
  Delay(1000);
//  knowledgeSourceTextbox.Keys("[Tab]");
  Delay(5000);
    
  let DropdownValue = "Create New Knowledge Source '" + knowledgeSourceName +"'";
  
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(DropdownValue,"No");

  //Verify the status of the Knowledge Source
  let Status = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//dcn-laundry-line//span").textContent;
  
  if(Status == "DRAFT")
  {
    Log.Checkpoint("New Knowledge Source creation is Started as the Knowledge Source Status is 'Draft'")
  }
  else
  {
    Log.Error("Knowledge Source has not been created");
  }
  
  //Verify KS Name
  let kSName = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//dcn-knowledge-source-details//fx-field[1]//div[@class='fx-field--inputAndError']");
  if(knowledgeSourceName == kSName.textContent)
  {
    Log.Checkpoint("Knowledge Source name is displayed correctly");
  }
  else
  {
    Log.Error("Knowledge Source name is incorrectly. It should be "+knowledgeSourceName+ " but it is displayed as "+ kSName );  
  }
  
  //Input the data in the fields 
  //versionIdentifier
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//dcn-knowledge-source-details//fx-field[2]//div[@class='fx-field--inputAndError']//input").SetText("1.0");
  
  //description
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//dcn-knowledge-source-details//fx-field[3]//div[@class='fx-field--inputAndError']//textarea").SetText("Descrciption text");
  
  //Knowledge Source Type
  let dropdownButton = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//dcn-knowledge-source-details//fx-field[4]//button");
  dropdownButton.click();
  SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown("KS","No");
  
  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();  
  
}

//  let inputData = "1.0, Desccription 1, ";
//  let fields = Aliases.browser.pageSapiensDecision.FindElements("//dcn-dialog//dcn-knowledge-source-details//fx-field");
//  
//  for(var i = 2;i<fields.length;i++)
//  {
//    let field = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//dcn-knowledge-source-details//fx-field["+i+"]//div[@class='fx-field--inputAndError']");
//  
//    //dcn-dialog//dcn-knowledge-source-details//fx-field//div[@class='fx-field--inputAndError']
//  }
  
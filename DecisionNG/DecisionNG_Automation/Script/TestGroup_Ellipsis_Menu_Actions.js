var Picture_To_Log = require("Picture_To_Log");
var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
var page = Aliases.browser.pageSapiensDecision2;

function Ellipsis_Button_Options(option)
{
  var page = Aliases.browser.pageSapiensDecision2;
  var ellipsis_Menu_Btn = page.FindElement("//i[@class='icon-more_menu spec-icon']//ancestor::dcn-button-menu/div");
  ellipsis_Menu_Btn.Click();
  let buttons= page.FindElements("//ul[contains(@class,'ui-menu-list')]//li//a");
  for(let i=0;i<buttons.length;i++)
  {
    let btnText = buttons[i].textContent
    Log.Message(btnText)
    if(option == btnText)
    {
      buttons[i].click();
      break;
    }
  }
}

function Select_Export_Testcase_Details(selectEnvironment, exportFormat)
{
//  var selectEnvironment = "DE";
//  var exportFormat = "JSON";
  var selectEnvironmentBtn= page.FindElement("//*[@name='environment']//button");
  var exportFormatDropdwnBtn = page.FindElement("//*[@name='exportMode']//button");
  
  selectEnvironmentBtn.ClickButton();
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(selectEnvironment,"No");
  exportFormatDropdwnBtn.ClickButton();
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(exportFormat,"No");
  
}

function Export_Testcase_Dialogue_CancelBtn()
{
  page.FindElement("//dcn-test-case-export-dialog//button[text()=' Cancel ']").ClickButton();
}


function Export_Testcase_Dialogue_ExportBtn()
{
  page.FindElement("//dcn-test-case-export-dialog//button[text()=' Export ']").ClickButton();
  //page.FindElement("//div[contains(@class,'mat-dialog-title')]").WaitProperty("Exists", false, 10000);
  Delay(1000);
  Aliases.browser.pageSapiensDecision.FindElement("//div[contains(@class,'test-case-progress-bar')]").WaitProperty("Exists", false, 30000);
  if(Aliases.browser.pageSapiensDecision2.FindElements("//div[contains(@class,'mat-dialog-title')]").length == 1)
  {
    Log.Error("Error : Export Testcase dialogue is not closed/has errors ");
    Picture_To_Log.PictureToLog();
    Export_Testcase_Dialogue_CancelBtn();
  }
  else
  {
    Log.Checkpoint("Export Testcase dialogue closed successfully");
  }

  
}

function Download_Export_File()
{
  Ellipsis_Button_Options('Download Export File');
  page.FindElement("//*[contains(@class,'toast-message ng-star-inserted')]").WaitProperty("Exists", true , 10000);
  let message = page.FindElement("//*[contains(@class,'toast-message ng-star-inserted')]").textContent
  Picture_To_Log.PictureToLog();
  if(message == "Download has started and may take a while to complete")
  {
    Log.Checkpoint("Toster Message : "+message)
  }
  else
  {
    Log.Error("Toster message was not displayed")
  }
 
}

function checkIfCellValueMatchesInFactTypeTable(FactName, columnName, expectedCellValue){
    
  var actualCellValue = getCellValueOfFactTypeTable(FactName, columnName)

  if(actualCellValue == expectedCellValue)
    Log.Checkpoint("expected and actual cell value matches in the facttype tab")
  else
    Log.Error("expected and actual cell value Not matching")
}

function getCellValueOfFactTypeTable(FtName, columnName)
{
  
  let page = Aliases.browser.pageSapiensDecision
  let totalRows = page.FindElements("//*[@class='task-fact-types__content-wrapper']//tbody/tr")

  colcount = getColumnNumber(columnName)
  
  for(var i = 1; i <=totalRows.length ; i++)
    {
      let FT_Name = page.FindElement("//*[@class='task-fact-types__content-wrapper']//tbody/tr["+i+"]//td[1]").innerText;
      
      if(FtName.trim() == FT_Name.trim())
      {
        Log.Message("Selected Facttype is Available");
        var cellValue = page.FindElement("//*[@class='task-fact-types__content-wrapper']//tbody/tr["+i+"]//td["+colcount+"]").innerText;
        Log.Message(cellValue);
        break;
      }
    }
    
    return cellValue;
    
}

function getColumnNumber(columnName){
  
let page = Aliases.browser.pageSapiensDecision
let totalRows = page.FindElements("//*[@class='task-fact-types__content-wrapper']//thead//th")
var counter = 0;

for(var i = 1; i <=totalRows.length ; i++)
    {
      let FT_Name = page.FindElement("//*[@class='task-fact-types__content-wrapper']//thead//th["+i+"]").innerText;

      if(columnName.trim() == FT_Name.trim())
      {
        Log.Checkpoint("column name was found. At position: "+ i)
        counter++;
        break;
        
      }
    }
    if(counter == 0)
      Log.Error("column name not found")
      
    return i;
}

module.exports.getCellValueOfFactTypeTable = getCellValueOfFactTypeTable;
//USEUNIT SelectingOptionfromDropDown_Role

function RF_EditCellLogic(RowNumber,ColumnName,operator,operandValue)
{
   
  var operandValues = operandValue.split("-")
  let page = Aliases.browser.pageSapiensDecision2
    

  let noOfValues = page.FindElements("//div[@role='columnheader']").length
  
  //Total Cells
  let ruleCells =  page.FindElements("//*[@role='gridcell']").length


  //Total Rows Present
  let totalRows = (ruleCells/noOfValues);

  //Adding values in the selected row
  let cellStartValue;
  if(totalRows > 1){     
        cellStartValue = (noOfValues * (RowNumber - 1))+1
        rowsToSubtract = (RowNumber - 1);
        cellsToSubtract = (rowsToSubtract * noOfValues);
          
  }
  else{
      cellStartValue = 1;
  }
    
  var lastCellvalue  =(cellStartValue -1 ) + noOfValues
    
  let totalColumns = page.FindElements("//div[@role='columnheader']")
  for(let j = cellStartValue; j <= lastCellvalue;j++){
        
      for(let i= 0;i<totalColumns.length;i++)
      {
        let columnText = totalColumns[i].contentText.trim()

        if(columnText == ColumnName)
        {
          var c = i
          var colNo = c + 1
          break;
        }
      }
      break;
  }
   
   let clickableCell = cellStartValue+c
   var cell = page.FindElement("(//div[@role='gridcell'])["+clickableCell+"]");
       cell.DblClick()
   
   page.FindElement("//dcn-combo-box//button[@aria-label='Toggle Dropdown']").Click()
   SelectingOptionfromDropdown(operator,"No")
   for(var j=0; j<operandValues.length; j++)
   {
     page.FindElement("//input[contains(@placeholder,'Add a custom value')]").keys(operandValues[j])
     page.FindElement("//button[contains(@class,'qa-add-btn')]").Click()
   }
   page.FindElement("//div[contains(@class,'conclusionHeader')]").Click();
   Log.Message(cell.getAttribute('textContent'))
     
}


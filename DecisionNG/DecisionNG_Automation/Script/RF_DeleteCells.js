function DeleteCell_Data_Verify(ColumnName,RowNumber,Key_ColumnTypes)
{
    var Key_ColumnType = Key_ColumnTypes.split("_")
    let page = Aliases.browser.pageSapiensDecision
    
    //let page= Aliases.browser.pageSapiensDecision2
  
    //Identifying number of columns
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
    
    for(let j = cellStartValue; j <= lastCellvalue;j++){
        let totalColumns = page.FindElements("//div[@role='columnheader']")
        for(let i= 0;i<totalColumns.length;i++)
        {
          let columnText = totalColumns[i].contentText.trim()
          if(columnText == ColumnName )
          {
            var c = i
            break;
          }
        }
        break;
        
        
}
     let clickableCell = cellStartValue+c
     var cell = page.FindElement("(//*[@role='gridcell'])["+clickableCell+"]");
     cell.Click();
     cell.keys(Key_ColumnType[0])
     
     let cellContent = cell.TextContent.trim(); 
     if(Key_ColumnType[1] == aqString.ToLower("condition") || Key_ColumnType[1] == aqString.ToLower("message category"))
     {
     if(cellContent == "-" )
     {
       Log.Checkpoint("Cell is Empty");
       
     }
     else
     {
       Log.Error("Cell holds data : "+cellContent);
     }
     }
     else if(Key_ColumnType[1] == aqString.ToLower("conclusion"))
     {
     if(cellContent == "Is ⋮" || cellContent == "Is Incremented By ⋮" || cellContent == "Is Appended With ⋮")
     {
       Log.Checkpoint("Operator remained same for conclusion column type");
       
     }
     else
     {
       Log.Error("Operator doesn't remain same for conclusion column type");
     }
     }
   
}



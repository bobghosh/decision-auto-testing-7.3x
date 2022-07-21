function Message_Category_DeleteCell_Data_Verify(MessageCategoryName,RowNumber)
{
    let page = Aliases.browser.pageSapiensDecision
    
    //let page= Aliases.browser.pageSapiensDecision2
  
    //Identifying number of columns
    let noOfValues = page.FindElements("//*[contains(@class,'spec-category')]//span").length
    Log.Message("Total Columns: "+noOfValues);

    //Total Cells
    let ruleCells =  page.FindElements("//*[contains(@class,'rule-message-cell')]").length
    Log.Message("Total Cells available: "+ruleCells);

    //Total Rows Present
    let totalRows = (ruleCells/noOfValues);
    Log.Message("Total Rows count: "+totalRows);

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
    
    Log.Message("Cell Start Value is : "+cellStartValue)
    
    var lastCellvalue  =(cellStartValue -1 ) + noOfValues
    
    Log.Message("Last cell value"+lastCellvalue)
    
    for(let j = cellStartValue; j <= lastCellvalue;j++){
        let totalColumns = page.FindElements("//*[contains(@class,'spec-category')]//span")
        Log.Message(totalColumns.length)
        for(let i= 0;i<totalColumns.length;i++)
        {
          let columnText = totalColumns[i].contentText.trim()
          Log.Message(columnText)
          if(columnText == MessageCategoryName )
          {
            var c = i
            break;
            Log.Message("Value of C : "+c)
          }
        }
        break;
        
        
}
     let clickableCell = cellStartValue+c
     var cell = page.FindElement("(//dcn-rule-message-cell)["+clickableCell+"]");
     cell.Click();
     cell.keys("[Del]")
     
     let cellContent = cell.TextContent.trim(); 
     
     Log.Message(cellContent);
     
     if(cellContent == "-" )
     {
       Log.Checkpoint("Cell is Empty");
       
     }
     else
     {
       Log.Error("Cell holds data : "+cellContent);
     }
   
}
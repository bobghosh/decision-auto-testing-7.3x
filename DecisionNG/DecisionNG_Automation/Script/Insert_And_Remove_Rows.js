
//Always Inserts a Row at last
function InsertLastRow()
{
    let page= Aliases.browser.pageSapiensDecision2
    page.Wait();
    Delay(2000);
    //No of columns present
    let columns = page.FindElements("//*[contains(@id,'tableColumnHeader')]");
    let columnCount = columns.length;
    
    //No of cells present
    let cells = page.FindElements("//*[@role='gridcell']");
    let cellsCount = cells.length;

    //No of rows
    let totalRows = cellsCount/columnCount;
    let lastRow = totalRows;
    Log.Message("Total Rows Before Inserting "+totalRows)

    page.FindElement("//span[text()='"+lastRow+"']").ClickR();
    page.FindElement("//span[contains(text(),'Insert')]").click();
    
    let cellsAfterInsertingRow =page.FindElements("//*[@role='gridcell']");
    let cellsCountAfterInsertingRow = cellsAfterInsertingRow.length;
    
    let rowsAfterInsert= cellsCountAfterInsertingRow/columnCount;
    Log.Message("Total Rows After Inserting  "+rowsAfterInsert)
    if(rowsAfterInsert == totalRows+1)
    {
      Log.Checkpoint("Row Inserted Successfully")
    }
    else
    {
      Log.Error("Row not inserted")  
    }
    
}

//Insert a Row after a specified Row number
function InsertUserSpecificRow(InsertAfterRowNumber)
{
    let page= Aliases.browser.pageSapiensDecision2; 
   //No of columns present
    let columns = page.FindElements("//*[contains(@id,'tableColumnHeader')]");
    let columnCount = columns.length;
    
    //No of cells present
    let cells = page.FindElements("//*[@role='gridcell']");
    let cellsCount = cells.length;

    //No of rows
    let totalRows = cellsCount/columnCount;
    let lastRow = totalRows;
    Log.Message("Total Rows Before Inserting "+totalRows)
    
    page.FindElement("//span[text()='"+InsertAfterRowNumber+"']").ClickR();
    page.FindElement("//span[contains(text(),'Insert')]").click();
    
    let cellsAfterInsertingRow =page.FindElements("//*[@role='gridcell']");
    let cellsCountAfterInsertingRow = cellsAfterInsertingRow.length;
    
    let rowsAfterInsert= cellsCountAfterInsertingRow/columnCount;
    Log.Message("Total Rows After Inserting  "+rowsAfterInsert)
    if(rowsAfterInsert == totalRows+1)
    {
      Log.Checkpoint("Row Inserted Successfully")
    }
    else
    {
      Log.Error("Row not inserted")  
    }
}


//Remove a Specified Row
function RemoveRow(RemoveRowNumber)
{
    let page= Aliases.browser.pageSapiensDecision2; 
   //No of columns present
    let columns = page.FindElements("//*[contains(@id,'tableColumnHeader')]");
    let columnCount = columns.length;
    
    //No of cells present
    let cells = page.FindElements("//*[@role='gridcell']");
    let cellsCount = cells.length;

    //No of rows
    let totalRows = cellsCount/columnCount;
    Log.Message("Total Rows Before Removing "+totalRows)
    
  
    page.FindElement("//span[text()='"+RemoveRowNumber+"']").ClickR();
    page.FindElement("//span[contains(text(),'Remove ')]").click();
    Aliases.browser.pageSapiensDecision.form.buttonOk.Click();
    
    let cellsAfterRemovingRow =page.FindElements("//*[@role='gridcell']");
    let cellsCountAfterRemovingRow = cellsAfterRemovingRow.length;
    
    let rowsAfteRemove= cellsCountAfterRemovingRow/columnCount;
    Log.Message("Total Rows After Removing  "+rowsAfteRemove)
    if(rowsAfteRemove == totalRows-1)
    {
      Log.Checkpoint("Row Removed Successfully")
    }
    else
    {
      Log.Error("Row not Removed")  
    }
}
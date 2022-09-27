//USEUNIT RF_Select_Row_OR_Column_OR_Cell
//USEUNIT WaitElement_ispresent
//USEUNIT Buttons_Actions
//USEUNIT RefLibrary

function RuleFamily_HighlightCells_UsingKeys(ColumnName,RowNumber,NumberOfCellsToBeSelected,KeysToBePressed,AdditionalKeyToBePressed)
{
  var count = 0;
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
     if(aqString.ToUpper(KeysToBePressed) != "ENTIRE ROW" && aqString.ToUpper(KeysToBePressed) != "ENTIRE COLUMN")
     {
       cell.Click()
       count = count+1
     }
     
     switch(aqString.ToUpper(KeysToBePressed))
     {
       case "SHIFT RIGHT":
       
       for(var i=1; i< NumberOfCellsToBeSelected; i++)
       {
          if(clickableCell % totalColumns.length != 0)
          {   
                
                cell.keys("![Right]")
                count = count+1
                clickableCell = clickableCell+1
          }
          else if(clickableCell % totalColumns.length == 0)
          {
            NumberOfClicksThatAreNotPerformed = NumberOfCellsToBeSelected - count
            Log.Message(NumberOfClicksThatAreNotPerformed)
          }
       }
       break
       
       case "SHIFT LEFT":
       for(var i=1; i< colNo; i++)
       {
          if(colNo != 1 && colNo > 1)
          {    
                cell.keys("![Left]")
                count = count+1
                clickableCell = clickableCell-1
          }
          else if(colNo == 1)
          {
            NumberOfClicksThatAreNotPerformed = NumberOfCellsToBeSelected - count
            Log.Message(NumberOfClicksThatAreNotPerformed)
          }
       }
            NumberOfClicksThatAreNotPerformed = NumberOfCellsToBeSelected - count
           Log.Message(NumberOfClicksThatAreNotPerformed)
           break
            
       case "SHIFT DOWN":
      
       if(RowNumber >= totalRows)
       {
         Log.Message("RowNumber is equal to "+RowNumber+" so cannot perform "+KeysToBePressed)
       }
       else if(RowNumber >= 1 && RowNumber <= totalRows)
       {
          for(var i=1; i <= NumberOfCellsToBeSelected; i++)
       {
         cell.keys("![Down]")
         count = count+1
         RowNumber = RowNumber + 1
         if(RowNumber == totalRows)
         {
           NumberOfClicksThatAreNotPerformed = NumberOfCellsToBeSelected - count
           break
         }
       }
       }
       
       NumberOfClicksThatAreNotPerformed = NumberOfCellsToBeSelected - count
       break
       
       case "SHIFT UP":
       if(RowNumber <= 1)
       {
         Log.Message("RowNumber is equal to "+RowNumber+" so cannot perform "+KeysToBePressed)
         NumberOfClicksThatAreNotPerformed = NumberOfCellsToBeSelected - count
       }
       
       else if(RowNumber >1 && RowNumber <= totalRows)
       {  
         for(var i=NumberOfCellsToBeSelected; i>= 1; i--)
       {
       
          cell.keys("![Up]")
          count = count+1
          RowNumber = RowNumber - 1
          if(RowNumber == 1)
          {
            NumberOfClicksThatAreNotPerformed = NumberOfCellsToBeSelected - count
            break
          }
       }
       
       }
       NumberOfClicksThatAreNotPerformed = NumberOfCellsToBeSelected - count
       break
       
        case "ENTIRE ROW":
        if(RowNumber >= 1 && RowNumber <= totalRows)
        {
          page.FindElement("//div[contains(@class,'table__row')]/span[text()="+RowNumber+"]").Click()
          break
        }
        
       case "ENTIRE COLUMN":
        Select_Row_OR_Column_OR_Cell("",ColumnName,"")
        break
        
     }
     
    var NumberOfSelectedColumnCells = page.FindElements("//div[@class='wj-colheaders']//div[contains(@class,'selected')]").length 
    var NumberOfSelectedRows = page.FindElements("//div[@class='wj-rowheaders']//div[contains(@class,'selected')]").length
    var NumberOfSelectedCells = page.FindElements("//div[@role='gridcell'][contains(@class,'selected')]").length
    
if(aqString.ToUpper(KeysToBePressed) != "ENTIRE ROW" && aqString.ToUpper(KeysToBePressed) != "ENTIRE COLUMN")
{
  if(NumberOfSelectedCells == count)
  {
    Log.Checkpoint("Number of selected cells are exactly matching")
  }
}
else if(aqString.ToUpper(KeysToBePressed) == "ENTIRE ROW")
{
  if(NumberOfSelectedRows+NumberOfSelectedCells+NumberOfSelectedColumnCells == totalColumns.length*2+1)
  {
    Log.Checkpoint("Number of selected cells are exactly matching")
  }
}
else if(aqString.ToUpper(KeysToBePressed) == "ENTIRE COLUMN")
{
  if(NumberOfSelectedRows+NumberOfSelectedCells+NumberOfSelectedColumnCells == totalRows*2+1)
  {
    Log.Checkpoint("Number of selected cells are exactly matching")
  }
}     
}

function HighLightMultipleCellsRemoveRows(ColumnName,RowNumber,KeysToBePressedArray,NumberOfCellsToBeSelected)
{
     let page = Aliases.browser.pageSapiensDecision2
    var KeysToBePressed = KeysToBePressedArray.split("_")

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
     cell.click()
     if(colNo <= 1)
     {
       for(var i=0; i<=KeysToBePressed.length; i++)
     {
       if(KeysToBePressed[i] == "![Left]")
       {
         Log.Error("Since it is the first column we cannot perform shift left")
         return
       }
     }
     }
     else if(colNo >= totalColumns.length)
     {
       for(var i=0; i<=KeysToBePressed.length; i++)
     {
       if(KeysToBePressed[i] == "![Right]")
       {
         Log.Error("Since it is the last column we cannot perform shift right")
         return
       }
     }
     }
     else if(totalRows <= 1 && RowNumber <=1)
     {
       Log.Message("Only one row exist so cannot perform shift up or shift down actions")
       return
     }
     else if(totalRows >= 2 && RowNumber >=2)
     {
     for(var i=0; i<=KeysToBePressed.length; i++)
     {
       cell.keys(KeysToBePressed[i])
     }
     
    var NumberOfSelectedColumnCells = page.FindElements("//div[@class='wj-colheaders']//div[contains(@class,'selected')]").length 
    var NumberOfSelectedRows = page.FindElements("//div[@class='wj-rowheaders']//div[contains(@class,'selected')]").length
    var NumberOfSelectedCells = page.FindElements("//div[@role='gridcell'][contains(@class,'selected')]").length
    var TotalSelectedCells = NumberOfSelectedColumnCells+NumberOfSelectedRows+NumberOfSelectedCells
    if(NumberOfCellsToBeSelected == TotalSelectedCells)
    {
      Log.Checkpoint("Number of cells that are selected are :"+TotalSelectedCells)
    }
    page.FindElement("//div[@class='wj-rowheaders']//div[contains(@class,'selected')]//span[text()='"+RowNumber+"']").ClickR()
    page.FindElement("//a[@title='Remove row']//span").Click()
    Wait_Until_Element_ispresent("//h1")
    Delay(1000)
    if(KeysToBePressed[0] == "![Up]")
    {
      var RemoveRowMessageObject = page.FindElement("//div[contains(@class, 'dialog-content')]//span[text() = 'Are you sure you want to remove row(s): "+(RowNumber-1)+","+RowNumber+"?']")
    }
    else if(KeysToBePressed[0] == "![Down]")
    {
      var RemoveRowMessageObject = page.FindElement("//div[contains(@class, 'dialog-content')]//span[text() = 'Are you sure you want to remove row(s):  "+RowNumber+","+(RowNumber+1)+"?']")
    }


    if(RemoveRowMessageObject.Exists)
    {
      Log.Checkpoint("Values are perfectly populated in the dialog box")
    }
    else{
      Log.Error("Values are not perfectly populated in the dialog box")
    }
    okButtonClick()
   let noOfValues1 = page.FindElements("//div[@role='columnheader']").length
  
    //Total Cells
    let ruleCells1 =  page.FindElements("//*[@role='gridcell']").length


    //Total Rows Present
    let totalRows1 = (ruleCells/noOfValues);
    if(totalRows1 == totalRows-NumberOfSelectedRows)
    {
      Log.Message(NumberOfSelectedRows+" has been removed")
    }
   } 
}

function HighLightEntireColumnAndValidate(Column_Name_toSelect,RowNumber,SecondColumnToSelect)
{
      let page = Aliases.browser.pageSapiensDecision2
    

    let noOfValues = page.FindElements("//div[@role='columnheader']").length
  
    //Total Cells
    let ruleCells =  page.FindElements("//*[@role='gridcell']").length


    //Total Rows Present
    let totalRows = (ruleCells/noOfValues);

    Select_Row_OR_Column_OR_Cell("",Column_Name_toSelect,"")
   var NumberOfSelectedColumnCells = page.FindElements("//div[@class='wj-colheaders']//div[contains(@class,'selected')]").length 
   var NumberOfSelectedRows = page.FindElements("//div[@class='wj-rowheaders']//div[contains(@class,'selected')]").length
   var NumberOfSelectedCells = page.FindElements("//div[@role='gridcell'][contains(@class,'selected')]").length
   var TotalSelectedCells = NumberOfSelectedColumnCells+NumberOfSelectedRows+NumberOfSelectedCells
   if((totalRows*2)+1 == TotalSelectedCells){
   Log.Checkpoint("Entire Column is selected correctly")  
   }
   
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

          if(columnText == SecondColumnToSelect)
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
    cell.Click()
    if(Column_Name_toSelect != page.FindElement("//div[@class='wj-colheaders']//div[contains(@class,'selected')]").textContent)
    {
      Log.Checkpoint("First specified column is unselected and the latest requested column is been selected")
    }
    else
    {
      Log.Error("First specified column is not unselected and the latest requested column has not been selected")
    }
    
   var NumberOfSelectedColumnCells = page.FindElements("//div[@class='wj-colheaders']//div[contains(@class,'selected')]").length 
   var NumberOfSelectedRows = page.FindElements("//div[@class='wj-rowheaders']//div[contains(@class,'selected')]").length
   var NumberOfSelectedCells = page.FindElements("//div[@role='gridcell'][contains(@class,'selected')]").length
   var TotalSelectedCells = NumberOfSelectedColumnCells+NumberOfSelectedRows+NumberOfSelectedCells
   if(TotalSelectedCells == 3)
   {
     Log.Checkpoint("Column is unselected")
   }
   else
   {
     Log.Error("Column is not selected")
   }
}

function getHighlightedStateForConclusionColumn()
{
  let conclusionHeader = page.FindElement("//div[contains(@class,'conclusionHeader')]")
  if(conclusionHeader.getAttribute('class').includes('multi-selected'))
  {
    Log.Checkpoint("Conslusion Header is highlighted by default")
  }
  else
  {
    Log.Error("Not Highlighted")
  }
}

function DragRowTo_RightTT(RowName){
  
  //This function only created for TC6731 and may not work for other cases
  let page = Aliases.browser.pageSapiensDecision2;
  let sourceRG = page.FindElement("//div[contains(@class,'condition-fact-type-name')]//*[text()='"+RowName+"']/ancestor::dcn-fact-type-status-view/..").click();
    
  Delay(500);
  const sourceMouseX = Sys.Desktop.MouseX;
  const sourceMouseY = Sys.Desktop.MouseY;
  LLPlayer.MouseDown(MK_LBUTTON,sourceMouseX,sourceMouseY,2000);
  LLPlayer.MouseMove(sourceMouseX+300,sourceMouseY,2000);
  LLPlayer.MouseUp(MK_LBUTTON,sourceMouseX+200,sourceMouseY,2000);
}

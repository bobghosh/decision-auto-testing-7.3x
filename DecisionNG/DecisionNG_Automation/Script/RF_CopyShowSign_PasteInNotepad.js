var RF_Copied_Cell_Value
var RF_Pasted_Cell_Value

function RF_CopyCellValue_PasteCellValue(ColumnName,RowNumber,KeyToBePressed)
{
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
          if(columnText == ColumnName)
          {
            var c = i
            break;
          }
        }
        break;
        
        
}
     let clickableCell = cellStartValue+c
     var cell = page.FindElement("(//*[@role='gridcell'])["+clickableCell+"]");
     cell.Click()
     cell.keys(KeyToBePressed)
     if(KeyToBePressed == "^c"){
       RF_Copied_Cell_Value = page.FindElement("//div[@class='wj-cells']//div[contains(@class,'selected')]").textContent
     }
     else if(KeyToBePressed == "^v"){
       RF_Pasted_Cell_Value = page.FindElement("//div[@class='wj-cells']//div[contains(@class,'selected')]").textContent
     }
     

     
     
}


function WritingShowSignDataIntoNotepadAndValidating()
{
  var FilePath = Project.Path+"InputFilesForValidation\\ShowSign.txt"
  if(aqFile.Exists(FilePath))
  {
    aqFile.Delete(FilePath)
  }
  var p, Edit;
  WshShell.Run("notepad.exe", SW_SHOWNORMAL);
  p = Sys.Process("NOTEPAD");
  Edit = p.Window("Notepad").Window("Edit");
  Edit.Keys("^v");
  Edit.Keys("^s");

  Sys.Process("notepad").WaitWindow("#32770")
  Sys.Process("notepad").Window("#32770", "Save As", 1).Window("DUIViewWndClassName", "", 1).Window("DirectUIHWND", "", 1).Window("FloatNotifySink", "", 1).Window("ComboBox", "", 1).Window("Edit", "", 1).Keys(FilePath)
  Sys.Process("notepad").FindChild(["WndCaption"],["&Save"],100).Click()
    if(aqFile.Exists(FilePath))
  {
    Log.Checkpoint("ShowSign notepad is created successfully on the following path "+FilePath)
  }
  else
  {
    Log.Error("ShowSign notepad is not created on the following path "+FilePath)
  }
    if(Sys.Process("notepad").Exists)
  {
    Sys.Process("notepad").Close()
  }
  var np = aqFile.OpenTextFile(FilePath,aqFile.faRead,aqFile.ctUTF8)
  while(! np.IsEndOfFile())
  {
    var ShowSignValueFromNotepad = np.ReadLine()
    if(ShowSignValueFromNotepad == RF_Copied_Cell_Value)
    {
      Log.Checkpoint("Cell data copied from RF table is pasted successfully into notepad")
    }
    else
    {
      Log.Error("Cell data copied from RF table is not getting pasted into notepad")
    }
  }
  np.Close()
  }
  
//function ValidateShowRowIdShowSignValueForRow(ColumnName,RowNumber,KeyToBePressed)
//{ 
//  RF_CopyCellValue_PasteCellValue(ColumnName,RowNumber,KeyToBePressed)
//  if(RF_Copied_Cell_Value != "" && RF_Copied_Cell_Value != null && RF_Copied_Cell_Value != undefined)
//  {
//    if(aqString.GetLength(RF_Copied_Cell_Value == 7) && aqString.ToLower(ColumnName) == "id")
//    {
//      Log.Checkpoint(ColumnName+" holding the data: "+RF_Copied_Cell_Value)
//    }
//    else if(aqString.GetLength(RF_Copied_Cell_Value == 32) && aqString.ToLower(ColumnName) == "externalsign")
//    {
//      Log.Checkpoint(ColumnName+" holding the data: "+RF_Copied_Cell_Value)
//    }
//    
//  }
//}

function RF_InsertAndUpdateCellValuesWithCodeDataType(RowNumber,ColumnName,string)
{
    var count = 0
      let page = Aliases.browser.pageSapiensDecision
        let logicValues = string.split(":");
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
          if(columnText == ColumnName)
          {
            var c = i
            break;
          }
        }
        break;
        
        
}
     let clickableCell = cellStartValue+c
     var cell = page.FindElement("(//*[@role='gridcell'])["+clickableCell+"]");
     cell.DblClick()
     Delay(2000)
     var Fields = page.FindElements("//dcn-combo-box//input[@class='wj-form-control']")
      for(var k=0; k <= Fields.length; k++)
      {
        if(k == 0)
        {
           Fields[k].Keys(logicValues[0])
           count = count+1
        }
        else if(k == 1)
        {
           Fields[k].Keys(logicValues[1])
           count = count+1
        } 
          
}
Fields[Fields.length-1].Keys("[Tab]")
if(count == Fields.length)
{
  Log.Message("Correctly entered the data")
}
     
}


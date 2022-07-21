//USEUNIT Insert_And_Remove_Rows

function RuleFamily_ContextMenu_DisplayOptions(ContextMenuOption,flag)
{
  let page = Aliases.browser.pageSapiensDecision2
  page.FindElement("//div[@class='content-padding ng-star-inserted']").ClickR()
  switch(aqString.ToLower(ContextMenuOption))
  {
  case "show row id":
  let ShowRowID = page.FindElement("//span[text()='Show Row Id']")
  if(ShowRowID.Exists && ShowRowID.Enabled)
  {
    Log.Checkpoint("Show Row ID is displayed under the conext menu")
  }
  if(flag == "Yes")
  {
    ShowRowID.Click()
  }
  break
  
  case "show sign":
  let ShowSign = page.FindElement("//span[text()='Show Sign']")
  if(ShowSign.Exists && ShowSign.Enabled)
  {
    Log.Checkpoint("ShowSign is displayed under the conext menu")
  }
  if(flag == "Yes")
  {
    ShowSign.Click()
  }
  break
  
  case "set operator display mode to symbol":
  let SetOperatorDisplayModeToSymbol = page.FindElement("//span[text()='Set operator display mode to symbol']")
  if(SetOperatorDisplayModeToSymbol.Exists && SetOperatorDisplayModeToSymbol.Enabled)
  {
    Log.Checkpoint("Set operator display mode to symbol is displayed under the conext menu")
  }
  break
  
  case "hide row id":
  let HideRowID = page.FindElement("//span[text()='Hide Row Id']")
  if(HideRowID.Exists && HideRowID.Enabled)
  {
    Log.Checkpoint("Hide Row ID is displayed under the conext menu")
  }
    if(flag == "Yes")
  {
    HideRowID.Click()
  }
  break
  
  case "hide sign":
  let HideSign = page.FindElement("//span[text()='Hide Sign']")
  if(HideSign.Exists && HideSign.Enabled)
  {
    Log.Checkpoint("HideSign is displayed under the conext menu")
  }
    if(flag == "Yes")
  {
    HideSign.Click()
  }
  break
  
  }
  if(page.FindElement("//ul[@class='ui-menu-list']").Exists)
  {
    page.FindElement("//*[contains(@class,'conclusionHeader')]").Click()
  }
}

function Rf_fetch_ShowRowId_ShowSign_ColNo_ValidateBothValues(ColumnName,InputShowRowIdShowSignToValidate,StoreSignValues)
{
  var count=0
  var RowIdCount = 0
  var ShowSignCount = 0
  var ColumnNames = ColumnName.split("_")
  var InputShowRowIdToValidate = InputShowRowIdShowSignToValidate.split("_")
  if(StoreSignValues == aqString.ToLower("yes"))
  {
  if(!Project.Variables.VariableExists("ShowSignValuesTable"))
  {
  Project.Variables.AddVariable("ShowSignValuesTable", "Table");
  }
  
  var t = Project.Variables.VariableByName("ShowSignValuesTable");
  
  t.AddColumn("externalSign");
  
  t.RowCount = 1       
  }
    let page = Aliases.browser.pageSapiensDecision2
    

    let noOfValues = page.FindElements("//div[@role='columnheader']").length
  
    //Total Cells
    let ruleCells =  page.FindElements("//*[@role='gridcell']").length


    //Total Rows Present
    let totalRows = (ruleCells/noOfValues);
var k=0
    //Adding values in the selected row
    let cellStartValue = 1;

    let totalColumns = page.FindElements("//div[@role='columnheader']")
        
        for(let i= 0;i<totalColumns.length;i++)
        {
          if(count == ColumnNames.length)
          {
            break
          }
        for(k; k<ColumnNames.length; k++)
        {
          let columnText = totalColumns[i].contentText.trim()

          if(columnText == ColumnNames[k])
          {
            if(InputShowRowIdToValidate[k] != "" || InputShowRowIdToValidate[k] != undefined)
            {
              if(InputShowRowIdToValidate[k] == i)
              {
                count = count+1
                Log.Checkpoint(ColumnNames[k]+" is shown before Condition and Conclusion FactTypes columns")
              }
              else
              {
                Log.Error(ColumnNames[k]+" is not shown before Condition and Conclusion FactTypes columns")
                
              }
            }
                      k =k+1
                      break
                      
          }
        }
        }
    var RowId_ShowSign_Cells = page.FindElements("//div[@role='gridcell']//div[contains(@class,'wj-read-only-cell')]")
      for(var j=0; j<RowId_ShowSign_Cells.length; j++)
      {
        if((j+1) % 2 == 1)
        {
          if(RowId_ShowSign_Cells[j].contentText != "" && RowId_ShowSign_Cells[j].contentText != undefined && RowId_ShowSign_Cells[j].contentText != null)
        {
          if(aqString.GetLength(RowId_ShowSign_Cells[j].contentText) == 7)
          {
                      RowIdCount = RowIdCount + 1
          Log.Message(RowId_ShowSign_Cells[j].contentText)
          }

        }

    }

    else if((j+1) % 2 == 0)
    {
     if(RowId_ShowSign_Cells[j].contentText != "" && RowId_ShowSign_Cells[j].contentText != undefined && RowId_ShowSign_Cells[j].contentText != null)
        {
          if(aqString.GetLength(RowId_ShowSign_Cells[j].contentText) == 32)
          {
            ShowSignCount = ShowSignCount + 1
            Log.Message(RowId_ShowSign_Cells[j].contentText)
            if(StoreSignValues == aqString.ToLower("yes"))
            {

              t.$set("externalSign", t.RowCount-1 ,RowId_ShowSign_Cells[j].contentText );
              t.RowCount = t.RowCount+1
              if(j == RowId_ShowSign_Cells.length-1)
              {
                t.RowCount = t.RowCount-1
              }
}


            }
          }

        }
  }
    
    if(RowIdCount == totalRows)
    {
      Log.Checkpoint("Row Id is auto populated for all the rows")
    }
    else{
      Log.Error("Row Id is not auto populated")
    }
       
    if(ShowSignCount == totalRows)
    {
      Log.Checkpoint("Show Sign Id is auto populated for all the rows")
    }
    else{
      Log.Error("Show Sign is not auto populated")
    }
}

function ValidateColumn_ShowRowId_ShowSign(ColumnName)
{
    var count = 0;    

    let page = Aliases.browser.pageSapiensDecision2

    let totalColumns = page.FindElements("//div[@role='columnheader']")
        
        for(let i= 0;i<totalColumns.length;i++)
        {
          let columnText = totalColumns[i].contentText.trim()
          if(columnText == ColumnName)
          {
            count = count + 1
          }
        }
          if(count == 0)
          {
            Log.Checkpoint(ColumnName+" is hidden")
          }
          else
          {
            Log.Error(ColumnName+" is not hidden")
          }
}


function ValidateShowSignValuesWhenMovedFromApprovedToDraft()
{
  let page = Aliases.browser.pageSapiensDecision2
  var ShowSignCount = 0
  var count = 0
  var i = 0
      let noOfValues = page.FindElements("//div[@role='columnheader']").length
  
    //Total Cells
    let ruleCells =  page.FindElements("//*[@role='gridcell']").length


    //Total Rows Present
    let totalRows = (ruleCells/noOfValues);
    var t = Project.Variables.VariableByName("ShowSignValuesTable");      
      var RowId_ShowSign_Cells = page.FindElements("//div[@role='gridcell']//div[contains(@class,'wj-read-only-cell')]")
      for(var j=0; j<RowId_ShowSign_Cells.length; j++)
      {
            if((j+1) % 2 == 0)
    {
     if(RowId_ShowSign_Cells[j].contentText != "" && RowId_ShowSign_Cells[j].contentText != undefined && RowId_ShowSign_Cells[j].contentText != null)
        {
          if(aqString.GetLength(RowId_ShowSign_Cells[j].contentText) == 32)
          {
            ShowSignCount = ShowSignCount + 1
            Log.Message(RowId_ShowSign_Cells[j].contentText)
            if(t.RowCount == totalRows)
            {
            for(i; i<t.RowCount; i++)
            {
              if(t.Item("externalSign",i) == RowId_ShowSign_Cells[j].contentText)
              {
                count = count + 1
                i = i+1
                break
              }
            }
            }
            else{
              Log.Error("Number of show sign values has some differences in count between Approved and Draft RF")
            }
            }
          }

        }
  }
  if(count == totalRows && count == t.RowCount)
  {
    Log.Checkpoint("Show sign values are perfectly matching when moved from Approved RF to Draft")
  }
  else
  {
    Log.Error("Show sign values are not matching when moved from Approved RF to Draft")
  }
}


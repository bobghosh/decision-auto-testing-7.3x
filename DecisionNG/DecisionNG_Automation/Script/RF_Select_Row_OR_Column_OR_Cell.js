function Select_Row_OR_Column_OR_Cell(Row_number,Column_Name_toSelect,Column_Number){
  
let page =Aliases.browser.pageSapiensDecision2;

//Provide only Row_number to select required row and leave other fields as blank
//provide only Column_Name_toSelect to select required column and leave other fields as blank
//Provide Row_number and Column_Number to select cell and leave other fields as blank



//No of Rows
let Rows_UI=page.FindElements("//div[contains(@class,'rowheaders')]//*[contains(@class,'wj-header')]");
//No of Columns
let column_elements=page.FindElements("//span[contains(@id,'tableColumnHeader')]//ancestor::div[contains(@class,'u-flex-container--col')]");
let columns=column_elements.length;

//To select Required Row in the RF
if((!Row_number=="")&&(Column_Number=="")&&(Column_Name_toSelect==""))
{
   if(Row_number<=Rows_UI.length)
   {
    let xpath_Row="//div[contains(@class,'rowheaders')]//*[text()='"+Row_number+"']//ancestor::div[contains(@class,'wj-header')]"
    //page.FindElement(xpath_Row).click();
    OCR.Recognize(page.FindElement(xpath_Row)).BlockByText(Row_number).ClickNextTo(toTop,2);
    if(page.FindElement(xpath_Row).getAttribute('class').includes('wj-state-multi-selected'))
    {
    Log.Checkpoint("Required Row is selected susscessfully");
    }
    else
    {
      Log.Error("Required row is not selected");
    }
    }
    else
    {
         Log.Error("Required row doesn't exist in the UI");
    }
}
//To select Column
else if((!Column_Name_toSelect=="")&&(Column_Number=="")&&(Row_number==""))
{ 
  let flag="false";
  for(let i=0;i<columns;i++)
  {
    Column_Name=column_elements[i].textContent;
   
    //Log.Message(Column_Name)
    if(Column_Name_toSelect == Column_Name)
    {
       OCR.Recognize(column_elements[i]).BlockByText(Column_Name).ClickNextTo(toTop,3);
    //column_elements[i].ClickNext
    Log.Checkpoint("Required Column is selected successfully");
    flag="true";
    break;
    //*[@role='row']//div[@aria-selected='true']
    }
    
  }
if((flag=="false"))
  {
    Log.Error("Required Column doesn't exist");
  }
  
}

//Select cell
else if((!Row_number=="")&&(!Column_Number=="")&&(Column_Name_toSelect==""))
{
let k= parseInt(Row_number)+1;
Column_Number=parseInt(Column_Number);
let cell="((//*[@class='wj-row'])["+k+"]//dcn-rule-cell)["+Column_Number+"]";

    if((Column_Number<=columns)&&(Row_number<=Rows_UI.length))
    {
        let Text=page.FindElement(cell+"//dcn-string-input//div[contains(@class,'ng-star')]").TextContent;
       // ((//*[@class='wj-row'])[2]//dcn-rule-cell)[6]//dcn-string-input//div[contains(@class,'ng-star')]
        
         OCR.Recognize(page.FindElement(cell)).BlockByText(Text).ClickNextTo(toRight,1);
  
        if(page.FindElement(cell+"//ancestor::div[contains(@class,'wj-cell dt')]").getAttribute('aria-selected').includes('true'))
        {
               Log.Checkpoint("Required Cell is selected successfully");
        }
         else
        {
                Log.Error("Required cell is not selected properly");
         }
     }
     else
     {
            Log.Error("Required Row or Column doesn't Exist");
      }
}
else
{
  Log.Error("Verify the Inputs-> To select ROW provide only Row_Number,To select COLUMN provide only Column_Name_toSelect and To select CELL provide both Row_number and Column_Number");
}

}

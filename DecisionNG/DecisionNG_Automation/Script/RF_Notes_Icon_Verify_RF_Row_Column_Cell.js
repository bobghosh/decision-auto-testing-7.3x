function RF_Notes_Icon_Verify_RF_Row_Column_Cell(RF_OR_Row_OR_Column_OR_Cell){
  
  let page = Aliases.browser.pageSapiensDecision2;
  
//To check notes icon for a Row

//Log.Message(Row_elements.length);

switch(RF_OR_Row_OR_Column_OR_Cell)
{
case "RF":
{
let RF_element=page.FindElement("//div[contains(@class,'wj-topleft')]//div[contains(@class,'content-padding')]");

if(RF_element.firstElementChild.getAttribute('class').includes('icon-notes_indication spec-rfv-note-indicator'))
{
  Log.Checkpoint("Notes Icon exists for Opened RF");
}
else
{
  
Log.Error("Notes Icon doesn't exists for Opened RF");
}

break;
}

case "Row":
{
  let Rows_xpath="//div[contains(@class,'rowheaders')]//*[contains(@class,'wj-header')]"
  let Row_elements=page.FindElements(Rows_xpath);
for(let i=0;i<Row_elements.length;i++)
{
  let Row_Number=i+1;
  //Log.Message(Row_Number);
  if(Row_elements[i].getAttribute('aria-selected').includes('true'))
  {
    //Log.Message(Row_Number);
    let tags=page.FindElement("("+Rows_xpath+")["+Row_Number+"]//div[contains(@class,'decision-table__row')]");
    
    if(tags.firstElementChild.getAttribute('class').includes('icon-notes_indication spec-row-note-indicator'))
    {
      Log.Checkpoint("Notes Icon exists for selected Row: "+Row_Number);
      
    }
    else
    {
      Log.Error("Notes Icon doesn't exists for selected Row: "+Row_Number);
    }
      break;
   }
  
}
break;
}
//To check notes icon for a Column
case "Column":
{
let column_xpath="//span[contains(@id,'tableColumnHeader')]//ancestor::div[contains(@class,'wj-header')]";
let column_elements=page.FindElements(column_xpath);
let columns=column_elements.length;

for(let j=0;j<column_elements.length;j++)
{
  
  let Column_Number=j+1;
  
 if(column_elements[j].getAttribute('aria-selected').includes('true'))
  {
    
  
   let column_tags=page.FindElement("("+column_xpath+")["+Column_Number+"]//div[contains(@class,'column-header__readonly')]")
  
    if(column_tags.firstElementChild.getAttribute('class').includes('icon-notes_indication'))
    {
      Log.Checkpoint("Notes Icon exists for selected Column: "+Column_Number);
      
    }
    else
    {
      Log.Error("Notes Icon doesn't exists for selected Column: "+Column_Number);
    }
      break;
   }
  
}
break;
}
//To check Notes icon for a Cell
case "Cell":
{
  let cell_xpath="//dcn-rule-cell//ancestor::div[contains(@role,'gridcell')]";
  Cell_Elements=page.FindElements(cell_xpath);

  for (let k=0;k<Cell_Elements.length;k++)
  {
    let Cell_Number=k+1;
    if(Cell_Elements[k].getAttribute('aria-selected').includes('true'))
  {
    
  
   let cell_tags=page.FindElement("("+cell_xpath+")["+Cell_Number+"]//div[contains(@class,'decision-table')]")
  
    if(cell_tags.firstElementChild.getAttribute('class').includes('icon-notes_indication'))
    {
      Log.Checkpoint("Notes Icon exists for selected Cell");
      
    }
    else
    {
      Log.Error("Notes Icon doesn't exists for selected Cell");
    }
      break;
   }
  }
  break;
}

default:
Log.Error("Provide Valid Item(Row/Column/Cell) to verify notes icon is available");

}
}
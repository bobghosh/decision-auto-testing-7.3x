
var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");
var SelectingOptionfromDropDown = require("SelectingOptionfromDropDown_Role");
var SelectingOptionfromDropDown_Only1DDexsists = require("SelectingOptionfromDropDown_Role");

function Catagory_Add_Message_DesiredCell(MessageCategoryName,Message,RowNumber)
{  
    let page = Aliases.browser.pageSapiensDecision
    let string = Message
    var apendedCellData = ""
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
    
    //Log.Message("Last cell value : "+lastCellvalue)
    
    for(let j = cellStartValue; j <= lastCellvalue;j++){
        let totalColumns = page.FindElements("//*[contains(@class,'spec-category')]//span")
        //Log.Message(totalColumns.length)
        for(let i= 0;i<totalColumns.length;i++)
        {
          let columnText = totalColumns[i].contentText.trim()
          //Log.Message(columnText)
          if(columnText == MessageCategoryName )
          {
            var c = i
            //Log.Message("Value of C : "+c)
            break;
            
          }
        }
        break;
        
        
}
     let clickableCell = cellStartValue+c
     var cell = page.FindElement("(//dcn-rule-message-cell)["+clickableCell+"]");
     
     let categoryCellDataBefore = cell.textContent.trim();
     if(categoryCellDataBefore == "-")
     {
       categoryCellDataBefore = ""
     }
     
     Log.Message("Before data : "+categoryCellDataBefore)
     
     cell.DblClick();

    let category = string.split(";");
    
    for(let i = 0; i < category.length; i++){
       
        let type = category[i].substr(0,1);
        
        //Log.Message("Type: "+i+" is: "+type);

        switch(type)
        {
            //Facttype
            case "%":
            {
                 page.FindElement("//dcn-combo-box//button").Click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown("% - Fact Type","No");
                 page.FindElement("//dcn-fact-type-message-element-editor//input").keys(category[i].substr(1));
                 Delay(5000);
                 SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(category[i].substr(1),"No");
                 page.FindElement("//button[contains(@class,'spec-icon-add')]").Click();
                 apendedCellData  = apendedCellData+"+"+"%"+category[i].substr(1)+"%"               
                 break;
            }
            
            //Supporting RF
            case "<":
            {
                 page.FindElement("//dcn-combo-box//button").Click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown("< - Supporting","No");
                 page.FindElement("//dcn-supporting-rfv-message-element-editor//input").keys(category[i].substr(1));
                 page.FindElement("//dcn-supporting-rfv-message-element-editor//input").keys('[Tab]');
                 page.FindElement("//button[contains(@class,'spec-icon-add')]").click();
                 apendedCellData  = apendedCellData+"+"+"<"+category[i].substr(1)+">"
                 break;
            }
            
            //Value
            case "(":
            {
                 page.FindElement("//dcn-combo-box//button").Click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown("(Value:","No");
                 page.FindElement("//dcn-message-operand-operator-element//button").click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown(category[i].substr(1),"No");
                 page.FindElement("//button[contains(@class,'spec-icon-add')]").click();       
                 apendedCellData  = apendedCellData+"+"+"(Value:"+category[i].substr(1)+")"   
                 break;
            } 
            
            //Operator
            case "&":
            {
              
                 page.FindElement("//dcn-combo-box//button").Click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown("(Operator:","No");   
                 page.FindElement("//dcn-message-operand-operator-element//button").click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown(category[i].substr(1),"No");
                 page.FindElement("//button[contains(@class,'spec-icon-add')]").click(); 
                 apendedCellData  = apendedCellData+"+"+"(Operator:"+category[i].substr(1)+")"
                 break;
            }
            
            //Message
            case "@":
            {
                 page.FindElement("//dcn-combo-box//button").Click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown("@ - Message","No"); 
                 page.FindElement("//dcn-categories-message-element-editor//button").Click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown(category[i].substr(1),"No");
                 page.FindElement("//button[contains(@class,'spec-icon-add')]").click(); 
                 apendedCellData  = apendedCellData+"+"+"@"+category[i].substr(1)+"@"
                 break;
            }
            
            //RF Name
            case "#":
            {     
                 page.FindElement("//dcn-combo-box//button").Click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown("# - RF name","No"); 
                 //page.FindElement("//dcn-message-element-editor//input").settext(category[i].substr(1))
                 page.FindElement("//button[contains(@class,'spec-icon-add')]").click();
                 apendedCellData  = apendedCellData+"+"+"#"+"RF Name"+"#"
                 break;
                 
            }
            
            //Row ID
            case "!":
            {
                 page.FindElement("//dcn-combo-box//button").Click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown("! - Row ID","No");
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown("! - Row ID");
                 //page.FindElement("//dcn-message-element-editor//input").settext(category[i].substr(1))
                 page.FindElement("//button[contains(@class,'spec-icon-add')]").click();
                 apendedCellData  = apendedCellData+"+"+"!Row ID!"
                 break;
                 
            }
           
            //Annotation FT and creating new FT from messages 
            case "$":
            {
              
                 page.FindElement("//dcn-combo-box//button").Click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown("% - Fact Type","No");
                 page.FindElement("//dcn-fact-type-message-element-editor//input").keys(category[i].substr(1));
                 Delay(5000);
                 let createnewFT = "Create New Fact Type \""+category[i].substr(1)+"\""
                 SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(createnewFT,"No");
                 page.FindElement("//button[contains(@class,'spec-icon-add')]").Click();
                 apendedCellData  = apendedCellData+"+"+"%"+category[i].substr(1)+"%"               
                 break;
            }
            
            //Text
            default:{
                 page.FindElement("//dcn-combo-box//button").Click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown("\"Text\"","No");
                 page.FindElement("//dcn-message-element-editor//textarea").Keys(category[i]);
                 page.FindElement("//button[contains(@class,'spec-icon-add')]").Click();
                 apendedCellData  = apendedCellData+"+"+'"'+category[i]+'"'
                  break;
            }
        }
    }
     
     page.FindElement("//div[contains(@class,'conclusionHeader')]").Click();
     let ruleCells1 =  page.FindElements("//*[@role='gridcell']");
     for(let i =0;i<=ruleCells.length;i++)
     {
       cell.click()
       page.FindElement("(//dcn-rule-message-cell)["+i+"]").Keys["Right"]
     }
     

     //verify celldata
   let afterCellData = cell.textContent.trim()
   
   let cellDatatoCompare = categoryCellDataBefore+apendedCellData
  
   if(cellDatatoCompare.substr(0,1) == "+")
   {
     cellDatatoCompare = cellDatatoCompare.substr(1);
     
   }

   if(cellDatatoCompare == afterCellData )
   {
     Log.Checkpoint("Cell value updated successfully : "+afterCellData)
   }
   else{
     Log.Error("Cell value not updated : "+afterCellData)
   }
   
}

        
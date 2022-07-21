var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");
var SelectingOptionfromDropDown= require("SelectingOptionfromDropDown_Role");
function RuleFamily_Logic(string,rowNumber)
{   
    let page = Aliases.browser.pageSapiensDecision2;
    let ddValue;
    let rowValues;
    let xCoordinate;
    let yCoordinate;

    //await browser.sleep(5000);
    //await tasks.insertARow(100, 230);

    //Identifying number of columns
    let logicValues = string.split(";");
    let noOfValues = logicValues.length;
    Log.Message("Total Columns: "+noOfValues);

    //Total Cells
    let ruleCells =  page.FindElements("//*[@role='gridcell']");
    Log.Message("Total Cells available: "+ruleCells.length);

    //Total Rows Present
    let totalRows = (ruleCells.length/noOfValues);
    Log.Message("Total Rows count: "+totalRows);

    let rowToInsert = totalRows;

    //Adding values in the selected row
    let cellStartValue;
    let valueCount;
    let rowsToSubtract;
    let cellsToSubtract;
    let isFieldVisible;

    if(totalRows > 1){
//        cellStartValue = (noOfValues * (totalRows - 1)) + 1;
//        rowsToSubtract = (totalRows - 1);
//        cellsToSubtract = (rowsToSubtract * noOfValues);
          for(let j=1; j<=totalRows; j++ )
          {
            if(j == rowNumber)
            {
              
            }
          }
    }
    else{
        cellStartValue = 1;
    }
    
//    for(let j = cellStartValue; j <= ruleCells.length;j++){
//        if(totalRows > 1){
//            valueCount = (j - cellsToSubtract) - 1;
//        }
//        else{
//            valueCount = (j - 1);
//        }
//        
//        if(j == ruleCells.length){
//             page.FindElement("(//dcn-rule-cell)["+j+"]").DblClick();
//            //await browser.sleep(2000);
//            //page.FindElement("(//dcn-rule-cell)["+j+"]").Click();
//            //await browser.sleep(2000);
//            //await common.clickOnElement(element(by.xpath("//dcn-string-input//child::input")));
//            let type
//            type = logicValues[noOfValues - 1].substr(0,1);
//        
//            switch(type){
//                case "%":{
//                    page.FindElement(("//dcn-round-robin//div")).Click();
//                    page.FindElement("//dcn-autocomplete//input").keys(logicValues[noOfValues - 1].substr(1));
//                    Delay(3000)
//                    SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(logicValues[noOfValues - 1].substr(1),'No');
//                    page.FindElement("//dcn-string-input//child::input").keys('[Tab]');
//                    //await common.enterTextValueAndTabOut(element(by.xpath("//dcn-autocomplete//input")), rowValues[1].substr(1));
//                    break;
//                }
//                case "&":{
//                    //browser.sleep(2000)
//                    page.FindElement("//dcn-round-robin//div").click();
//                    //await browser.sleep(2000);
//                    page.FindElement("//dcn-round-robin//div").click();
//                    //await common.enterTextValue(element(by.xpath("//input[contains(@class,'ng-star-inserted')]")), logicValues[0].substr(1));
//                    //await common.enterTextValue(element(by.xpath("//dcn-formula//dcn-codemirror/textarea")), rowValues[1].substr(1));
//                    //await common.clickOnElement(element(by.xpath("//dcn-formula//dcn-codemirror//textarea")));
//                    page.FindElement("//dcn-formula//dcn-codemirror").click();
//                    page.FindElement("//dcn-formula//dcn-codemirror").Keys(['^']);
//                    
//                    page.FindElement("//ul//li//span[contains(text(),'YEAR_DIFF')]").click();
//                    
//                    page.FindElement("(//dcn-formula//textarea)[1]").settext(logicValues[noOfValues - 1].substr(1));
//                    page.FindElement("//dcn-fact-type-status-view//span").click();
//                    break;
//                }
//                default:{
//                        Delay(2000)
//                    if(page.FindElement("//dcn-string-input//child::input").Exists)
//                    {
//                      isFieldVisible = true;
//                    }                                        
//                    if(isFieldVisible == true){
//                        Log.Message(logicValues[noOfValues - 1]);
//                        page.FindElement("//dcn-string-input//child::input").Keys(logicValues[noOfValues - 1]);
//                        page.FindElement("//dcn-string-input//child::input").keys('[Tab]');
//                    }
//                    else{
//                         page.FindElement("//dcn-combo-box//button").click(); 
//                         SelectingOptionfromDropDown.SelectingOptionfromDropdown(logicValues[noOfValues - 1],'No');
//                         page.FindElement("//span[text()='1']").Click();
//                         
//                    }
//                    break;
//                }
//            }
//        }
//        else{
//            //Differentiating the values to be entered in the row
//            rowValues = logicValues[valueCount].split(":");
//            Log.Message("Row value 1: "+rowValues[0]);
//            Log.Message("Row Value 2: "+rowValues[1]);
//
//            if(rowValues[0] != "" || rowValues[1] != ""){
//                 page.FindElement("(//dcn-rule-cell)["+j+"]").Dblclick();
//                 
//                 //page.FindElement("(//dcn-rule-cell)["+j+"]").click();            
//                //Selecting the condition from the dropdown
//                page.FindElement("//dcn-operators-dropdown//*[contains(@class,'wj-btn')]").click();
//                SelectingOptionfromDropDown.SelectingOptionfromDropdown(rowValues[0],'No');
//                //common.selectDropdown(tasksPE.logicDropdown, rowValues[0]);
//
//                let type
//                type = rowValues[1].substr(0,1);
//                 Log.Message(type) 
//                switch(type){
//                    case "%":{
//                         Log.Message("1")
//                         page.FindElement("//dcn-round-robin//div").click();
//                         page.FindElement("//dcn-autocomplete//input").keys(rowValues[1].substr(1));
//                         Delay(3000)
//                         SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(rowValues[1].substr(1),'No')
//                         Delay(2000)
//                         page.FindElement("//dcn-autocomplete//input").keys('[Tab]');
//                        //await common.enterTextValueAndTabOut(element(by.xpath("//dcn-autocomplete//input")), rowValues[1].substr(1));
//                        
//                        break;
//                    }
//                    case "&":{
//                         Log.Message("Formula case") 
//                         page.FindElement("//dcn-round-robin//div").click();
//                         
//                         page.FindElement("//dcn-round-robin//div").click();
//                         
////                         page.FindElement("//dcn-formula//dcn-codemirror").keys(rowValues[1].substr(1));
////                        //await common.enterTextValue(element(by.xpath("//dcn-formula//dcn-codemirror/textarea")), rowValues[1].substr(1));
////                         page.FindElement("//dcn-formula//dcn-codemirror").click();
////                         page.FindElement("//dcn-formula//dcn-codemirror").keys('[Enter]');
//                    page.FindElement("//dcn-formula//dcn-codemirror").click();
//                    page.FindElement("//dcn-formula//dcn-codemirror").Keys(['^']);
//                    
//                    page.FindElement("//ul//li//span[contains(text(),'YEAR_DIFF')]").click();
//                    
//                    page.FindElement("(//dcn-formula//textarea)[1]").keys(rowValues[1].substr(1));
//                    page.FindElement("//dcn-fact-type-status-view//span").click();
//                         
//                         
//                        break;
//                    }
//                    default:{ 
//                        //await common.enterTextValueAndEnter(element(by.xpath("//input[contains(@class,'ng-star-inserted')]")), rowValues[1]);
//                        
//                        let isNumberFieldVisible;
//                        let isDateFieldVisible;
//                        let isTextFieldVisible;
//                        Log.Message("default")  
//                        if(page.FindElement("//dcn-number-input//input").Exists)
//                        {
//                           isNumberFieldVisible = true;
//                        }
//        
//                        else if(page.FindElement("//dcn-date-picker//input").Exists)                            
//                        {
//                           isDateFieldVisible=  true;
//                        }
//                        else if( page.FindElement("//dcn-string-input//input").Exists)
//                        {
//                           isTextFieldVisible = true;
//                        }
//        
//                        Log.Message("IS Number Field Visible: "+isNumberFieldVisible);
//                        Log.Message("IS Date Field Visible: "+isDateFieldVisible);
//                        Log.Message("IS Text Field Visible: "+isTextFieldVisible);
//
//                        if(isTextFieldVisible == true){
//                             page.FindElement("//dcn-string-input//input").settext(rowValues[1]).keys(['Tab'])
//                            break;
//                        }
//                        else if(isNumberFieldVisible == true){
//                             
//                             page.FindElement("//dcn-number-input//input").click();
//                             page.FindElement("//dcn-number-input//input").settext(parseInt(rowValues[1]));
//                             page.FindElement("//dcn-number-input//input").Keys('[Tab]');
//                            //await browser.sleep(5000);
//                            break;
//                        }
//                        else if(isDateFieldVisible == true){
//                             page.FindElement("//dcn-date-input//input").settext(rowValues[1]);
//                             page.FindElement("//dcn-number-input//input").Keys('[Tab]');
//                        }
//                        break;
//                    }
//                }
//            }
//        }
//    }
}
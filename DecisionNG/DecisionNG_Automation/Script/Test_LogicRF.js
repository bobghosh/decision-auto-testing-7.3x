var RF_Select_Row_OR_Column_OR_Cell = require("RF_Select_Row_OR_Column_OR_Cell");
var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");
var SelectingOptionfromDropDown= require("SelectingOptionfromDropDown_Role");
function RuleFamily_Logic(string,rowNumbertoEnterData)
{   
    let page = Aliases.browser.pageSapiensDecision2;
    let ddValue;
    let rowValues;
    let xCoordinate;
    let yCoordinate;

    //Identifying number of columns
    let logicValues = string.split(";");
    let noOfValues = logicValues.length;
    Log.Message("Total Columns: "+noOfValues);

    //Total Cells
    let conditionRuleCells = page.FindElements("//*[contains(@class,'dt_condition_cell')]").length
    let conclusionRuleCells = page.FindElements("//*[contains(@class,'dt_conclusion_cell')]").length
    Log.Message(conditionRuleCells)
    Log.Message(conclusionRuleCells)
    let ruleCells =  conditionRuleCells + conclusionRuleCells

    Log.Message("Total Cells available: "+ruleCells);

    //Total Rows Present
    let totalRows = (ruleCells/noOfValues);
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
          cellStartValue = (noOfValues * (rowNumbertoEnterData - 1))+1
          rowsToSubtract = (rowNumbertoEnterData - 1);
          cellsToSubtract = (rowsToSubtract * noOfValues);
          
    }
    else{
        cellStartValue = 1;
    }
    Log.Message("Cell Start Value is : "+cellStartValue)
    var lastCellvalue  =(cellStartValue -1 ) + noOfValues
    Log.Message("Last cell value"+lastCellvalue)
    for(let j = cellStartValue; j <= lastCellvalue;j++){
        if(totalRows > 1){
            valueCount = (j - cellsToSubtract) - 1;
        }
        else{
            valueCount = (j - 1);
        }
        
        if(j == lastCellvalue){
          if(!logicValues[noOfValues - 1]=="")
          {
             page.FindElement("(//dcn-rule-cell)["+j+"]").DblClick();
            //await browser.sleep(2000);
            //page.FindElement("(//dcn-rule-cell)["+j+"]").Click();
            //await browser.sleep(2000);
            //await common.clickOnElement(element(by.xpath("//dcn-string-input//child::input")));
            let type
            type = logicValues[noOfValues - 1].substr(0,1);
        
            switch(type){
                case "%":{
                    page.FindElement(("//dcn-round-robin//div")).Click();
                    page.FindElement("//dcn-autocomplete//input").keys(logicValues[noOfValues - 1].substr(1));
                    Delay(3000)
                    SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(logicValues[noOfValues - 1].substr(1),'No');
                    page.FindElement("//dcn-string-input//child::input").keys('[Tab]');
                    //await common.enterTextValueAndTabOut(element(by.xpath("//dcn-autocomplete//input")), rowValues[1].substr(1));
                    break;
                }
                case "&":{
                    //browser.sleep(2000)
                    page.FindElement("//dcn-round-robin//div").click();
                    //await browser.sleep(2000);
                    page.FindElement("//dcn-round-robin//div").click();
                    //await common.enterTextValue(element(by.xpath("//input[contains(@class,'ng-star-inserted')]")), logicValues[0].substr(1));
                    //await common.enterTextValue(element(by.xpath("//dcn-formula//dcn-codemirror/textarea")), rowValues[1].substr(1));
                    //await common.clickOnElement(element(by.xpath("//dcn-formula//dcn-codemirror//textarea")));
                    page.FindElement("//dcn-formula//dcn-codemirror").click();
                    page.FindElement("//dcn-formula//dcn-codemirror").Keys(['^']);
                    
                    page.FindElement("//ul//li//span[contains(text(),'YEAR_DIFF')]").click();
                    
                    page.FindElement("(//dcn-formula//textarea)[1]").settext(logicValues[noOfValues - 1].substr(1));
                    page.FindElement("//dcn-fact-type-status-view//span").click();
                    break;
                }
                default:{
                        Delay(2000)
                    if(page.FindElements("//dcn-string-input//child::input").length > 0)
                    {
                      isFieldVisible = true;
                    }                                        
                    if(isFieldVisible == true){
                        Log.Message(logicValues[noOfValues - 1]);
                        page.FindElement("//dcn-string-input//child::input").Keys(logicValues[noOfValues - 1]);
                        page.FindElement("//dcn-string-input//child::input").keys('[Tab]');
                    }
                    else{
                         page.FindElement("//dcn-combo-box//button").click(); 
                         SelectingOptionfromDropDown.SelectingOptionfromDropdown(logicValues[noOfValues - 1],'No');
                         page.FindElement("//span[text()='1']").Click();
                         
                    }
                    break;
                }
            }
        }
        }
        else{
            //Differentiating the values to be entered in the row
            rowValues = logicValues[valueCount].split(":");
//            Log.Message("Row value 1: "+rowValues[0]);
//            Log.Message("Row Value 2: "+rowValues[1]);

            if(rowValues[0] != "" || rowValues[1] != ""){
                 page.FindElement("(//dcn-rule-cell)["+j+"]").Dblclick();
                 
                 //page.FindElement("(//dcn-rule-cell)["+j+"]").click();            
                //Selecting the condition from the dropdown
                page.FindElement("//dcn-operators-dropdown//*[contains(@class,'wj-btn')]").click();
                SelectingOptionfromDropDown.SelectingOptionfromDropdown(rowValues[0],'No');
                //common.selectDropdown(tasksPE.logicDropdown, rowValues[0]);

                let type
                type = rowValues[1].substr(0,1);
                 Log.Message(type) 
                switch(type){
                    case "%":{
                         Log.Message("1")
                         page.FindElement("//dcn-round-robin//div").click();
                         page.FindElement("//dcn-autocomplete//input").keys(rowValues[1].substr(1));
                         Delay(3000)
                         SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(rowValues[1].substr(1),'No')
                         Delay(2000)
                         page.FindElement("//dcn-autocomplete//input").keys('[Tab]');
                        //await common.enterTextValueAndTabOut(element(by.xpath("//dcn-autocomplete//input")), rowValues[1].substr(1));
                        
                        break;
                    }
                    case "&":{
                         Log.Message("Formula case") 
                         page.FindElement("//dcn-round-robin//div").click();
                         
                         page.FindElement("//dcn-round-robin//div").click();
                         
//                         page.FindElement("//dcn-formula//dcn-codemirror").keys(rowValues[1].substr(1));
//                        //await common.enterTextValue(element(by.xpath("//dcn-formula//dcn-codemirror/textarea")), rowValues[1].substr(1));
//                         page.FindElement("//dcn-formula//dcn-codemirror").click();
//                         page.FindElement("//dcn-formula//dcn-codemirror").keys('[Enter]');
                    page.FindElement("//dcn-formula//dcn-codemirror").click();
                    page.FindElement("//dcn-formula//dcn-codemirror").Keys(['^']);
                    
                    page.FindElement("//ul//li//span[contains(text(),'YEAR_DIFF')]").click();
                    
                    page.FindElement("(//dcn-formula//textarea)[1]").keys(rowValues[1].substr(1));
                    page.FindElement("//dcn-fact-type-status-view//span").click();
                         
                         
                        break;
                    }
                    default:{ 
                        //await common.enterTextValueAndEnter(element(by.xpath("//input[contains(@class,'ng-star-inserted')]")), rowValues[1]);
                        let isDropdownVisible;
                        let isNumberFieldVisible;
                        let isDateFieldVisible;
                        let isTextFieldVisible;
//                        Log.Message("default")  
                        if(page.FindElements("//dcn-number-input//input").length>0)
                        {
                           isNumberFieldVisible = true;
                        }
                        else if(page.FindElements("//dcn-domain-input/div/div/div/format-values-drop-down").length > 0)
                        {
                          isDropdownVisible = true;
                        }
        
                        else if(page.FindElements("//dcn-date-picker//input").length > 0)                            
                        {
                           isDateFieldVisible=  true;
                        }
                        else if( page.FindElements("//dcn-string-input//input").length > 0)
                        {
                           isTextFieldVisible = true;
                        }
        
                        Log.Message("IS Number Field Visible: "+isNumberFieldVisible);
                        Log.Message("IS Date Field Visible: "+isDateFieldVisible);
                        Log.Message("IS Text Field Visible: "+isTextFieldVisible);

                        if(isTextFieldVisible == true){
                          
                             page.FindElement("//dcn-string-input//input").Keys(rowValues[1])
                             page.FindElement("//dcn-string-input//input").Keys('[Tab]');
                            break;
                        }
                        else if(isNumberFieldVisible == true){
                             
                             page.FindElement("//dcn-number-input//input").click();
                             page.FindElement("//dcn-number-input//input").settext(parseInt(rowValues[1]));
                             page.FindElement("//dcn-number-input//input").Keys('[Tab]');
                            //await browser.sleep(5000);
                            break;
                        }
                        else if(isDropdownVisible == true){
                             
                             page.FindElement("//*[@class='valid-value-combobox-spec']//button").Click();
                             SelectingOptionfromDropDown.SelectingOptionfromDropdown(rowValues[1])
                             //page.FindElement("//dcn-number-input//input").settext(parseInt(rowValues[1]));
                             page.FindElement("//*[@class='valid-value-combobox-spec']//button").Keys('[Tab]');
                            //await browser.sleep(5000);
                            break;
                        }
                        else if(isDateFieldVisible == true){
                             page.FindElement("//dcn-date-input//input").settext(rowValues[1]);
                             page.FindElement("//dcn-number-input//input").Keys('[Tab]');
                        }
                        break;
                    }
                }
            }
        }
    }
}
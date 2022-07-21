var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");
var SelectingOptionfromDropDown = require("SelectingOptionfromDropDown_Role");

function MessageCategory_Add_Messages(string,rowNumber)
{  
  
    let page = Aliases.browser.pageSapiensDecision2;
  
    page.FindElement("(//dcn-rule-message-cell)["+rowNumber+"]").DblClick();
    
    let category = string.split(";");
    
    for(let i = 0; i < category.length; i++){
       
        let type = category[i].substr(0,1);
        
        Log.Message("Type: "+i+" is: "+type);

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
                 
                 break;
            }
            
            //RF Name
            case "#":
            {     
                 page.FindElement("//dcn-combo-box//button").Click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown("# - RF name","No"); 
                 //page.FindElement("//dcn-message-element-editor//input").settext(category[i].substr(1))
                 page.FindElement("//button[contains(@class,'spec-icon-add')]").click(); 
                 break;
            }
            
            //Row ID
            case "!":
            {
                 page.FindElement("//dcn-combo-box//button").Click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown("! - Row ID","No");
                 common.selectDropdown(element(by.xpath("//dcn-combo-box//button")), "! - Row ID");
                 //page.FindElement("//dcn-message-element-editor//input").settext(category[i].substr(1))
                 page.FindElement("//button[contains(@class,'spec-icon-add')]").click();
                break;
            }
            
            //Text
            default:{
                 page.FindElement("//dcn-combo-box//button").Click();
                 SelectingOptionfromDropDown.SelectingOptionfromDropdown("\"Text\"","No");
                 page.FindElement("//dcn-message-element-editor//textarea").Keys(category[i]);
                 page.FindElement("//button[contains(@class,'spec-icon-add')]").Click();
                 break;
            }
        }
    }
     
     page.FindElement("//div[contains(@class,'conclusionHeader')]").Click();
     
     let cellContent = page.FindElement("(//dcn-rule-message-cell)[2]//span").TextContent.trim(); 
     
     Log.Message(cellContent);
     
     if(cellContent == "-" )
     {
       Log.Error("Message Not Inserted/Cell is Empty");
       
     }
     else
     {
       Log.Checkpoint("Message Inserted Successfully");
     }
     
}
  




        
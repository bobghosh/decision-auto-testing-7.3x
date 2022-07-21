var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
function Release_Project_Details_Screen(ApprovalStrategy,DistinctUser,Users)
{
//        let ApprovalStrategy = "Any";
//        let DistinctUser = "Yes";
//        let Users = "Sumant,Vars"
        
        aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeRevision, "contentText", cmpEqual, "Release Project");

//        Aliases.browser.pageSapiensDecision2.FindElement("//*[@name='projectName']").SetText("TestP45");
        
        Log.Message(Aliases.browser.pageSapiensDecision2.FindElement("//*[@name='projectName']").Text);
    
 //       Aliases.browser.pageSapiensDecision2.FindElement("//*[@name='projectDescription']").Click();
        Aliases.browser.pageSapiensDecision2.FindElement("//*[@name='projectDescription']").Keys("Description");
        
        Aliases.browser.pageSapiensDecision2.FindElement("//dcn-combo-box[@class='spec-approval-strategy-value']//button").click();
        
        SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(ApprovalStrategy, "No");
        
        if(ApprovalStrategy == "All" || ApprovalStrategy == "Any")
        {
           var element = Aliases.browser.pageSapiensDecision2.FindElement("//div/dcn-switch-button/div/div[2]/label/div/div");
           var style = Aliases.browser.pageSapiensDecision.contentDocument.defaultView.getComputedStyle(element, "");
           
           if((style.background).includes("rgb(74, 207, 246)"))
           {
              Log.Message("It is Already checked");
              if(DistinctUser == "No")
              {
                element.Click();
                //Don't Select Distinct User
                if((style.background).includes("rgb(221, 221, 221)"))
                {
                  Log.Checkpoint("Distinct User is unchecked")
                }
                else
                {
                  Log.Error("Distinct User is still checked")
                }
              }
            }            
            else if((style.background).includes("rgb(221, 221, 221)"))
            {
              Log.Message("It is not checked"); 
              if(DistinctUser == "Yes")
              {
                element.Click();
                //Select Distinct User
                if((style.background).includes("rgb(74, 207, 246)"))
                {
                  Log.Checkpoint("Distinct User is Checked")
                }
                else
                {
                  Log.Error("Distinct User is still unchecked")
                }
              }
            }
            
            let Message = Aliases.browser.pageSapiensDecision2.FindElement("//tbody//span");
              
            if(ApprovalStrategy == "All")
            {     
              aqObject.CheckProperty(Message, "textContent", cmpEqual, "At least one approver has to be selected for Approval Strategy 'ALL'");
            }
            else if(ApprovalStrategy == "Any")
            {
              aqObject.CheckProperty(Message, "textContent", cmpEqual, "At least one approver has to be selected for Approval Strategy 'ANY'");       
            }
            
            let User_array = Users.split(',');
            for(let i = 0; i < User_array.length; i++)
            {
    
                Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(@class,'approval-strategy--add-btn')]").click();
                
                Aliases.browser.pageSapiensDecision2.FindElement("//dcn-combo-box[contains(@class,'spec-approval-strategy--approver-list__datagrid__combo-box')]//button").click();
                SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(User_array[i],'No');

                Aliases.browser.pageSapiensDecision2.FindElement("//i[@class='icon-valid']").click();
    
                if(Aliases.browser.pageSapiensDecision2.FindElement("//dcn-approval-strategy//tbody//tr[1]//td[1]").textContent.trim().toUpperCase() == (User_array[i]).toUpperCase())
                {
                  Log.Checkpoint("User matches");
                }
                else
                {
                  Log.Error("User Selected is different");
                  Log.Message("User selected is " + Aliases.browser.pageSapiensDecision2.FindElement("//dcn-approval-strategy//tbody//tr[1]//td[1]").Text.trim().toUpperCase());
                }
    
              }
              
//              Verify Approval Strategy
//              if(Aliases.browser.pageSapiensDecision2.FindElement("//*[@ng-reflect-label='Approval Strategy']//input").Text.trim().toUpperCase() == ApprovalStrategy.toUpperCase())
//              {
//                Log.Checkpoint("Approval Strategy matches");
//              }
//              else
//              {
//                Log.Error("Approval Strategy is different");
//              }
    
          
        }
        else
        {
          Log.Message("None is selected");
          
        }
        
//        //*[contains(@class,'custom-properties-container__body')]//fx-field//input
//        let CustProp_subarray=[];
//        let CustompropertyExist=Aliases.browser.pageSapiensDecision.FindElement("//dcn-model-mapping-custom-properties//div//div//div").Child(0).getAttribute("class")
//        Log.Message(CustompropertyExist);
//        if(!CustompropertyExist.includes('no-data spec-no-custom-properties'))
//        {
//          
//        }
//        
        
        
        
}

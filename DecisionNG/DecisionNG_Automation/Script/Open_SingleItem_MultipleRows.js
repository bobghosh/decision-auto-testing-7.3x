//USEUNIT RefLibrary

function Open_Single_Row_Revision_Task_through_ProjectName(Item, Open)
{
  //Item is Release Project Name
    let flag = 0;
    let Paginator;
//    let Item = "Test"; Item is FactTypeName  
    if(Aliases.browser.pageSapiensDecision.FindElements("//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
//    Log.Message(Aliases.browser.pageSapiensDecision.FindElements("//dcn-paginator//p-paginator/div").length);
//    Log.Message(Paginator);
    
    let hasNext = "true";
    
    do{
  
          ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
          
          for(var j = 1; j <= ItemCount.length ; j++)
          {
                var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[2]");

                //If the Task Name matches 
                if(HighlightedItemName.textContent.trim() == Item.trim() )
                {          
                        //To select amy row click on any icon available on the row
                        Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//i").Click();
                        flag =1;
                        //class="ui-selectable-row ng-star-inserted ui-state-highlight"
                        Log.Message("Item is Selected")
                        
                        if(Open == "Yes")
                        {
                          Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//td[1]//a").Click();
                          let Status = Aliases.browser.pageSapiensDecision.FindElement("//dcn-laundry-line//span").textContent;
                          Log.Checkpoint("Status of pull request is " + Status)
                        }
                 }
                 if(flag == 1)
                 {
                    break;
                 }
            }
            if(flag ==1)
            {
              break;
            }
          
          if(Paginator == "Yes")
          {
            if(Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").getAttribute("class").includes("ui-state-disabled"))
            { 
              hasNext = "false";
            }
            else
            {
              Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").click();         
            }
          }
          else
          {
            hasNext = "false";
          }
      

    }while(hasNext == "true")
    
}

function Open_Single_Row_Deployment_Task_through_ProjectName_EnvironmentName_DeploymentName(ProjectName, EnvironmentName, DeploymentName, Open)
{

    let flag = 0;
    let Paginator;
//    let Item = "Test"; Item is FactTypeName  
    if(Aliases.browser.pageSapiensDecision.FindElements("//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
//    Log.Message(Aliases.browser.pageSapiensDecision.FindElements("//dcn-paginator//p-paginator/div").length);
//    Log.Message(Paginator);
    
    let hasNext = "true";
    
    do{
  
          ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
          
          for(var j = 1; j <= ItemCount.length ; j++)
          {
                var Deployment_Name = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[2]").textContent.trim();
                var Environment_Name = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[3]").textContent.trim();
                var Project_Name = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[4]").textContent.trim();

                //If the Task Name matches 
                if(Deployment_Name == DeploymentName && Environment_Name == EnvironmentName && Project_Name == ProjectName)
                {          
                        //To select amy row click on any icon available on the row
                        Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//i").Click();
                        flag =1;
                        //class="ui-selectable-row ng-star-inserted ui-state-highlight"
                        Log.Message("Item is Selected")
                        
                         if(Open == "Yes")
                        {
                          Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//td[1]//a").Click();
                          aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//h5"), "contentText", cmpEqual, "Deployment Task");
                        }
                 }
                 if(flag == 1)
                 {
                    break;
                 }
            }
            if(flag ==1)
            {
              break;
            }
          
          if(Paginator == "Yes")
          {
            if(Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").getAttribute("class").includes("ui-state-disabled"))
            { 
              hasNext = "false";
            }
            else
            {
              Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").click();         
            }
          }
          else
          {
            hasNext = "false";
          }
      

    }while(hasNext == "true")
    
}

function Open_SingleItem_MultipleRows(Item)
{
    //Select and Open Single Item from Multiple rows and Multiple Pages if pagination available
    //Applicable for or Release Project, Modelling Projects, Tasks - My Tasks(Tasks,Ft Tasks), Group Tasks - Tasks 
    
    let flag = 0;
    let Paginator;
    
    if(Aliases.browser.pageSapiensDecision.FindElements("//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
//    Log.Message(Aliases.browser.pageSapiensDecision.FindElements("//dcn-paginator//p-paginator/div").length);
//    Log.Message(Paginator);
    
    let hasNext = "true";
    
    do{
  
          ItemCount = Aliases.browser.pageSapiensDecision.FindElements(ORGeneric.row);
          
          for(var j = 1; j <= ItemCount.length ; j++)
          {
                var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//a");

                //If the Item Name matches 
                if(HighlightedItemName.textContent.trim() == Item )
                {          
                       HighlightedItemName.click();
                       flag =1;
                       Log.Message("Item is Opened")  
                 }
                 if(flag == 1)
                 {
                    break;
                 }
            }
            if(flag ==1)
            {
              break;
            }
          
          if(Paginator == "Yes")
          {
            if(Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").getAttribute("class").includes("ui-state-disabled"))
            { 
              hasNext = "false";
            }
            else
            {
              Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").click();         
            }
          }
          else
          {
            hasNext = "false";
          }
      

    }while(hasNext == "true")
    
}
function Open_Decision_And_Flows_From_TaskPage_Decision_Flows_DecisionsTab(Item)
{
    //Select and Open Single Item from Multiple rows and Multiple Pages if pagination available
    //Applicable for or Release Project, Modelling Projects, Tasks - My Tasks(Tasks,Ft Tasks), Group Tasks - Tasks 
    
    let flag = 0;
    let Paginator;
    
    if(Aliases.browser.pageSapiensDecision.FindElements("//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
//    Log.Message(Aliases.browser.pageSapiensDecision.FindElements("//dcn-paginator//p-paginator/div").length);
//    Log.Message(Paginator);
    
    let hasNext = "true";
    
    do{
  
          ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
          
          for(var j = 1; j <= ItemCount.length ; j++)
          {
                var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[2]//a");

                //If the Item Name matches 
                if(HighlightedItemName.textContent.trim() == Item.trim() )
                {          
                       HighlightedItemName.click();
                       flag =1;
                       Log.Message("Item is Opened")  
                 }
                 if(flag == 1)
                 {
                    break;
                 }
            }
            if(flag ==1)
            {
              break;
            }
          
          if(Paginator == "Yes")
          {
            if(Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").getAttribute("class").includes("ui-state-disabled"))
            { 
              hasNext = "false";
            }
            else
            {
              Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").click();         
            }
          }
          else
          {
            hasNext = "false";
          }
      

    }while(hasNext == "true")
    
}
module.exports.Open_SingleItem_MultipleRows = Open_SingleItem_MultipleRows;
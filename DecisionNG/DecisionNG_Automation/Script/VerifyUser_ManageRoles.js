function SelectingItem (Item)
{

  var ItemCount;
  var flag = 0;
  //var ItemName = Item
  //var CommunityName = Project.Variables.TaskName.Value("CommunityName");
  
  hasNext = true;
  
  do
  {     
    //Row Counts in one page
    ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody/tr");
    
    //Iterate through all the rows and finding the desired Task
    for(var j = 1; j <= ItemCount.length ; j++)
    {
      
      var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//span");
      //var HighlightedCommunityName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+ j + "]/td[2]");
      let user=HighlightedItemName.textContent.toString().trim();
      //If the Item Name matches 
      if(user == Item )
      {
              Log.Message("matched and entered");
            Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//button[@class='hover-button ng-star-inserted']").HoverMouse();
            Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//button[@class='hover-button ng-star-inserted']").Click();
            let RoleCheckbox=Aliases.browser.pageSapiensDecision2.panel13.getAttribute("class")
            if(!RoleCheckbox.includes("ui-state-active"))
              {
                  Log.Message("User checkbox is not checked")
                  Aliases.browser.pageSapiensDecision2.panel13.Click();
              }
              else
              {
                  Log.Message("User checkbox is already checked");
                  
              }
              
           
            Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();

             flag =1;
            // Log.Message("Pass");
          
                    
      }         
    }
     if(flag == 1)
      {
        
        break;
      }
      Delay(1000);
      let pagination=Aliases.browser.pageSapiensDecision.FindElement("//a[@ng-reflect-klass='ui-paginator-next ui-paginator']").Exists
      Log.Message("Pagination is "+pagination);
      if(pagination==true)
      {
        var Next_Page_Button = Aliases.browser.pageSapiensDecision.FindElement("//a[@ng-reflect-klass='ui-paginator-next ui-paginator']");
      
      if(Next_Page_Button.getAttribute("class") == "ui-paginator-next ui-paginator-element ui-state-default ui-corner-all")
      {
      Next_Page_Button.click();          
      }
      
      else
      {
        hasNext = false;
      }
      }
      else
      {
        Log.Message("pagination not present");
        break;
      }
      
        
    }while (hasNext==true)

}
module.exports.SelectingItem = SelectingItem;
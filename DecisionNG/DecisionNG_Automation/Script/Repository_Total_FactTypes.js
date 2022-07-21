function TotalFactTypes()
{
   
    var FactTypeRow;
    var FactTypeCount=0;
    var hasNext = true;
    
    //Getting the Paginator object
    var Paginator = Aliases.browser.pageSapiensDecision.FindElement("dcn-paginator");
    //Checking for Pagination
    if(Paginator.Exists == true)
    {
 
      do
      {
          //Checking for Next Button
          var NextButton = Aliases.browser.pageSapiensDecision.FindElement("//a[@ng-reflect-klass='ui-paginator-next ui-paginator']"); 
          //Getting NextButton class Attribute
          var NextButtonAttribute = NextButton.getAttribute("class");
 
          //Getting the Number of Rows
          FactTypeRow = Aliases.browser.pageSapiensDecision.FindElements("dcn-expandable-list-item");
          //Adding the rows from one page to another page
          FactTypeCount = FactTypeCount + FactTypeRow.length; 
   
          //Verifying the Enabling/Disabling of NextButton with the help of class attribute
          if (NextButtonAttribute == "ui-paginator-next ui-paginator-element ui-state-default ui-corner-all" )
          {
            NextButton.Click();
          }
          else
          {
            hasNext = false;
          }
   
      }while (hasNext == true)

      //Navigating back to first page
      var FirstPage = Aliases.browser.pageSapiensDecision.FindElement("//a[contains(@class,'ui-paginator-first')]");
      FirstPage.click();
    
    }
    
    //Pagination is not present
    else
    {
          //Getting the Number of Rows
//          FactTypeRow = Aliases.browser.pageSapiensDecision.FindElements("dcn-expandable-list-item");
//          //Adding the rows from one page to another page
//          FactTypeCount = FactTypeCount + FactTypeRow.length;
          Log.Message("Test");
            
    }
    
    //Total Number of Fact Types
    Log.Message(FactTypeCount);
    
}
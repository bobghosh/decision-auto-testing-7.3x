var SelectingTimeFromDropDown = require("SelectingTimeFromDropDown");
var SelectingOptionfromDropDown_MultipleSelection = require("SelectingOptionfromDropDown_MultipleSelection");
var SelectingDateFromCalendar = require("SelectingDateFromCalendar");
var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
var page = Aliases.browser.pageSapiensDecision2;

function Enter_TestcaseValues_BIM()
{
  var placeHolder;  
  
  let factTypeNames = page.FindElements("//dcn-testing-view-model-list//fx-field//label");  
  
  Log.Message("Names:"+factTypeNames.length);

  for(let i=0;i<factTypeNames.length;i++)
  {
    let factTypeNamesText = factTypeNames[i].textContent.trim()
      
    if(factTypeNamesText == "Condo Project Unit Owner Name")
    {
      let factTypeValuefeild = page.FindElements("//dcn-testing-view-model-list//fx-field//div//span//input");
      let classText = factTypeValuefeild[i].getAttribute('class');
      placeHolder = factTypeValuefeild[i].getAttribute('placeholder')
      Log.Message(classText,placeHolder);
      
      if(classText == 'wj-form-control')
      {
        if(placeHolder == "M/d/yyyy" || placeHolder == "M/yyyy")
        {
          page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button").Click();
          SelectingDateFromCalendar.CalendarSelection("No","2020","Jan","12")
        }
        
        else if(placeHolder == "M/d/yyyy h:mm a")
        {
           page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button[1]").Click();
           SelectingDateFromCalendar.CalendarSelection('No','1999','Jan','12')
           page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button[2]").Click();
           SelectingTimeFromDropDown.SelectingTimeFromDropdown('3:45 AM','No')
           
        }
        
        else if(placeHolder == "click to select")
        {
          page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button").Click();
          SelectingOptionfromDropDown_MultipleSelection.SelectingOptionfromDropdown_Multiselect('10 Year Warranty,Final Certificate of Occupancy','No')
          page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button").Click();
        }
        
        else
        {
          page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button").Click();
          SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown("10 Year Warranty","No");
        }
        
         
      }
      else
      {
        factTypeValuefeild[i].keys("^a[BS]");
        factTypeValuefeild[i].keys("Test");
        factTypeValuefeild[i].keys("[Tab]");
      }
      break;     
    }
    
  }
  
}


function ExpandBIMFolder(BIMFolderstoExpand)
{
  var arr = BIMFolderstoExpand.split(",");
  var arraylength= arr.length;
  for(let i=0;i<arraylength;i++)
  {
        var expandButton = page.FindElement("//dcn-testing-view-model-list//dcn-testing-bim//*[text()="+"'"+""+arr[i]+""+"'"+"]/parent::div/button");
        var exoandIcon= page.FindElement("//dcn-testing-view-model-list//dcn-testing-bim//*[text()="+"'"+""+arr[i]+""+"'"+"]/parent::div/button/span");
        var expandIconClassName = exoandIcon.getAttribute('class');
        
        if(expandIconClassName.includes('icon-zoom_magnifier_plus'))
        {
          expandButton.ClickButton();
        }
        else
        {
          Log.Message("Bim already expanded")
        }
  
  }
  
}


function CollapseBIMFolder(BIMFolderstoCollapse)
{
  var arr = BIMFolderstoCollapse.split(",");
  var arraylength= arr.length;
  for(let i=0;i<arraylength;i++)
  {
  var collapseButton = page.FindElement("//dcn-testing-view-model-list//dcn-testing-bim//*[text()="+"'"+""+arr[i]+""+"'"+"]/parent::div/button");
  var collapseIcon= page.FindElement("//dcn-testing-view-model-list//dcn-testing-bim//*[text()="+"'"+""+arr[i]+""+"'"+"]/parent::div/button/span");
  var collapseClassName = collapseIcon.getAttribute('class');
  
  if(collapseClassName.includes('icon-zoom_magnifier_minus'))
  {
    collapseButton.ClickButton();
  }
  
  else
  {
    Log.Message("Bim already Collapsed")
  }
  
  }
  
}

function TestCase_BIM_Add(BIMFoldername)
{
  let miniPaginator = page.FindElement("//dcn-testing-view-model-list//dcn-testing-bim//dcn-mini-paginator");
  let numberOfBIMBefore = miniPaginator.textContent;
  Log.Message(numberOfBIMBefore);
  let beforeText = numberOfBIMBefore.toString().split("/");
  let currentPagenumberBefore= beforeText[0];
  let totalPagesBefore= beforeText[1];
  let addButton = page.FindElement("//dcn-testing-view-model-list//dcn-testing-bim//*[text()= "+"'"+""+BIMFoldername+""+"'"+"]/parent::div/parent::div/child::div[2]//button[text()='Add ']");
  
  addButton.ClickButton();
  
  let numberOfBIMAfter = miniPaginator.textContent;
  Log.Message(numberOfBIMAfter);
  let afterText = numberOfBIMAfter.toString().split("/");
  let currentPagenumberAfter= afterText[0];
  let totalPagesAfter= afterText[1];
  
  if(totalPagesAfter == ++totalPagesBefore)
  {
    Log.Checkpoint("Successfully added the BIM FT")
  }
  else
  {
    Log.Error("BIM did not get added successfully")
  }
  
}

function TestCase_BIM_Remove(BIMFoldername)
{
  let miniPaginator = page.FindElement("//dcn-testing-view-model-list//dcn-testing-bim//dcn-mini-paginator");
  let numberOfBIMBefore = miniPaginator.textContent;
  Log.Message(numberOfBIMBefore);
  let beforeText = numberOfBIMBefore.toString().split("/");
  let currentPagenumberBefore= beforeText[0];
  let totalPagesBefore= beforeText[1];
  let removeButton = page.FindElement("//*[text()= "+"'"+""+BIMFoldername+""+"'"+"]/parent::div/parent::div/child::div[2]//button[contains(@class,'testing-bim__remove-bim-instance-button')]");
  
  removeButton.ClickButton();
  
  let numberOfBIMAfter = miniPaginator.textContent;
  Log.Message(numberOfBIMAfter);
  let afterText = numberOfBIMAfter.toString().split("/");
  let currentPagenumberAfter= afterText[0];
  let totalPagesAfter= afterText[1];
  
  if(totalPagesAfter == --totalPagesBefore)
  {
    Log.Checkpoint("Successfully removed the BIM FT");
  }
  else
  {
    Log.Error("BIM was not removed");
  }
  
}

function TestCase_BIM_miniPaginator(BIMFolderName,navigatetopage)
{
  let miniPaginator = page.FindElement("//dcn-testing-view-model-list//dcn-testing-bim//dcn-mini-paginator");
  let previousButton= page.FindElement("//dcn-testing-view-model-list//dcn-testing-bim//*[text()="+"'"+""+BIMFolderName+""+"'"+"]/parent::div/parent::div/child::div[2]//dcn-mini-paginator//button[1]");
  let nextButton= page.FindElement("//dcn-testing-view-model-list//dcn-testing-bim//*[text()="+"'"+""+BIMFolderName+""+"'"+"]/parent::div/parent::div/child::div[2]//dcn-mini-paginator//button[2]")
  let numberOfBIMBefore = miniPaginator.textContent;
  Log.Message(numberOfBIMBefore);
  let beforeText = numberOfBIMBefore.toString().split("/");
  let currentPagenumberBefore= beforeText[0];
  let totalPages= beforeText[1];
  var isPreviousBtnDisabled = previousButton.hasAttribute('disabled');
  var isNextBtnDisabled = nextButton.hasAttribute('disabled');
  
  for(let i=0;i<totalPages;i++)
    {
     if(navigatetopage == currentPagenumberBefore)
      {
        Log.Checkpoint("user is already in the mentioned page");
        break;
      }
      else if(navigatetopage > currentPagenumberBefore || isPreviousBtnDisabled == true)
      {
        nextButton.ClickButton();
        let numberOfBIM = miniPaginator.textContent;
        let beforeText = numberOfBIM.toString().split("/");
        let currentPage= beforeText[0];
          if(currentPage == navigatetopage)
          {
            Log.Checkpoint("Successfully Navigated to page : "+currentPage+"");
            break;
          }
        }
       
        else if(navigatetopage < currentPagenumberBefore || isNextBtnDisabled == true)
        {
          previousButton.ClickButton();
          let numberOfBIM = miniPaginator.textContent;
          let beforeText = numberOfBIM.toString().split("/");
          let currentPage= beforeText[0];
            if(currentPage == navigatetopage)
            {
              Log.Checkpoint("Successfully Navigated to page : "+currentPage+"");
              break;
            }
        }
        else{
          Log.Warning("Not navigated to required page")
        }

    }   
}
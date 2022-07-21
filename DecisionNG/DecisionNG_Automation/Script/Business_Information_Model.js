//USEUNIT RefLibrary

var page = Aliases.browser.pageSapiensDecision2;
var bimPleateBtn= page.FindElement(ORfloatingSidebar.dcnFloatingActionbtn+"/div[contains(@class,'decision-sidebar-actions decision-sidebar-actions__bim-button floating-button__bim')]");

function BIM_Open_Close()
{
  bimPleateBtn.Click();
}

function BIM_Plete_Open_EditIcon_Click()
{
  bimPleateBtn.Click()
  page.WaitElement(page.FindElement(ORfloatingSidebar.dcnBimTreePanel+"//button"),4000);
  page.FindElement(ORfloatingSidebar.dcnBimTreePanel+"//button").Click();
  page.WaitElement(page.FindElement(ORfloatingSidebar.dcnBimEditTree+"//h1"),4000);
  aqObject.CheckProperty(page.FindElement(ORfloatingSidebar.dcnBimEditTree+"//h1"), "contentText", cmpEqual, "Edit");
}

function BIM_Ok_Btn()
{
  page.FindElement(ORfloatingSidebar.dcnBimEditTree+"//button[text()=' OK ']").Click();
  Delay(2000);
}

function BIM_Cancel_Btn()
{
  page.FindElement(ORfloatingSidebar.dcnBimEditTree+"//button[text()=' Cancel ']").Click();
}

function BIM_Plete_Close()
{
  bimPleateBtn.Click();
}

function BIM_Add_Child(Rootname)
{
  var Bxpath = "//*[contains(@class,'spec-bim-element')][text()='"+Rootname+"']/../following-sibling::*/button"
  let bimAddChindBtns = page.FindElement(Bxpath);
  bimAddChindBtns.Click();
  page.WaitElement("//input[@name='editItem']", 5000).SetText("Child001");
  editBimOkBtn();
  
}

var editBimOkBtn = ()=>
{
  return bimOkBtn= page.FindElement("//button[@class='edit-confirm-spec']").click();
}

var editBimCancelBtn= ()=>
{
  return bimCancelBtn = page.FindElement("//i[@class='icon-fail']/parent::button").click();
}

function BIM_DragAndDropFT(dragFTAndDropInRG, RGname)
{  
  //FTName and Destination Group
//  var dragFTAndDropInRG = "TestRG Persistent1-Root"
  var setValues = dragFTAndDropInRG.split(',');  
     
  for(var i = 0; i < setValues.length ; i++) 
  { 
    var factType_And_RG_Names = setValues[i].split('-');
    var Source=factType_And_RG_Names[0];
    var Destination=factType_And_RG_Names[1];
    Log.Message("Source is "+Source)
    Log.Message("Destination is "+Destination)

    let SelectionRG = page.FindElement(ORfloatingSidebar.dcnBimEditTree+"//span[text()='"+RGname+"']");
    SelectionRG.Click();
    Delay(2000);
    
    let destinationRG = page.FindElement(ORfloatingSidebar.dcnBimEditTree+"//span[text()='"+Destination+"']");
    destinationRG.HoverMouse();
    Delay(500);
    const destinationMouseX = Sys.Desktop.MouseX;
    const destinationMouseY = Sys.Desktop.MouseY;
    
    let sourceRG = page.FindElement("//mat-dialog-container//span[text()='"+Source+"']");
    sourceRG.click();
    Delay(500);
    const sourceMouseX = Sys.Desktop.MouseX;
    const sourceMouseY = Sys.Desktop.MouseY;
    LLPlayer.MouseDown(MK_LBUTTON,sourceMouseX,sourceMouseY,2000);
    LLPlayer.MouseMove(destinationMouseX,destinationMouseY,2000);
    LLPlayer.MouseUp(MK_LBUTTON,destinationMouseX,destinationMouseY,2000);
  }
}

function Delete_BIM_Child(childName)
{
  var buttonxpath = "//*[contains(@class,'spec-bim-element')][text()='"+childName+"']/../following-sibling::*//*[@class='icon-close']"
  let childRGCloseIcon= page.WaitElement(buttonxpath, 5000);
  childRGCloseIcon.click();
}

function Edit_BIMChild(childName, newBimName)
{
  var childXpath = "//*[contains(@class,'spec-bim-element')][text()='"+childName+"']/../following-sibling::*/div//i[@class='icon-edit']"
  let childRGEditIcon = page.FindElement(childXpath);
  childRGEditIcon.Click();
  page.FindElement("//input[@name='editItem']").SetText(newBimName);
  editBimOkBtn();
}

function Expand_BIM_Group(RG_Name)
{
  let plusIcon = Aliases.browser.pageSapiensDecision.FindElement(ORfloatingSidebar.dcnBimEditTree+"//*[text()='"+ RG_Name +"']//ancestor::div[@class='ui-treenode-content ui-treenode-selectable']/span[1]");
  if(plusIcon.getAttribute("class").includes("pi-caret-right"))
  {
    plusIcon.click();
    if(plusIcon.getAttribute("class").includes("pi-caret-right"))
    {
      Log.Error("Still + is selected")
    }
    else
    {
      Log.Message("- is selected")
    }    
  }
}

function Verify_FactType_PresentIn_Root(FactTypeName){
  
  let page = Aliases.browser.pageSapiensDecision2;
  var count = 0
  let option = page.FindElements(ORfloatingSidebar.dcnBimTreePanel+"//ul//li[contains(@class, 'ui-treenode-leaf')]");
  
  for(let i=0;i<option.length;i++){
    
    var optiontext=option[i].textContent;
    Log.Message(optiontext)
    
    if(optiontext.trim() == FactTypeName)
          {
            Log.Checkpoint("Given facttype name is present in BIM root")
            option[i].HoverMouse();
            count++;
            break;
          }
    }
  
  if(count == 0)
    Log.Error("Facttype "+FactTypeName+" is not present in root")
        
  if((option.length-1) <= 0)
    Log.Error("BIM Root is empty");
  
}

function Verify_FactType_PresentIn_RightSide_Tree(FactTypeName){
  
  let page = Aliases.browser.pageSapiensDecision2;
  var count = 0
  let option = page.FindElements("//dcn-bim-right-side-tree//li[contains(@class, 'bim-right-side')]");
  
  for(let i=0;i<option.length;i++){
    
    var optiontext=option[i].textContent;
    Log.Message(optiontext)
    
    if(optiontext.trim() == FactTypeName)
          {
            Log.Checkpoint("Given facttype name is present in BIM root")
            option[i].HoverMouse();
            count++;
            break;
          }
    }
  
  if(count == 0)
    Log.Error("Facttype "+FactTypeName+" is not present in root")
        
  if((option.length-1) <= 0)
    Log.Error("BIM Root is empty");
  
}
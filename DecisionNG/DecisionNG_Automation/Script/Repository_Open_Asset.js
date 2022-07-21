function Open_Asset_Xpath(Asset_path,Asset_Type,Asset_Name)
{
  let page =Aliases.browser.pageSapiensDecision2;
    let flag = "0";
    let Paginator;  
    if(page.FindElements("//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
    Log.Message(Paginator);
    
    let hasNext = "true";
    
    do{
  
          ItemCount = page.FindElements("//dcn-expandable-selectable-list-item//i[contains(@class,'"+Asset_path+"')]/following-sibling::div/a");
          //Log.Message(ItemCount.length);
          for(var j = 0; j < ItemCount.length ; j++)
          {
          let k=j+1;
                let HighlightedItemName = ItemCount[j].textContent.trim();

                //If the Item Name matches 
                if(HighlightedItemName == Asset_Name.trim())
                {          
                        //To select amy row click on any icon available on the row
                        ItemCount[j].click();
                        //Delay(2000);
                        flag ="1";
                        if((Asset_Type== "Decision Flows")||(Asset_Type== "Decisions"))
                        {
                          page.WaitElement(page.canvas,30000)
                        }
                        else
                        {
                          page.WaitElement(page.FindElement("//dcn-dialog"),5000);
                        }
                        Log.Message("Asset is Opened")  
                 }
                 if(flag == "1")
                 {
                    break;
                 }
            }
            if(flag =="1")
            {
              break;
            }
          
          if(Paginator == "Yes")
          {
            if(page.FindElement("//*[contains(@class,'i-paginator-next')]").getAttribute("class").includes("ui-state-disabled"))
            { 
              hasNext = "false";
            }
            else
            {
              page.FindElement("//*[contains(@class,'i-paginator-next')]").click();  
              Delay(2000);       
            }
          }
          else
          {
            hasNext = "false";
          }
      

    }while(hasNext == "true")
    
}

function Open_SingleAsset(Asset_Type,Asset_Name){
  let AssetXpath;
switch (Asset_Type){
  
  case "Decision Flows":
  {
    AssetXpath= "icon-flow";
    Open_Asset_Xpath(AssetXpath,Asset_Type,Asset_Name);
    break;
  }
  case "Decisions":
  {
    AssetXpath= "icon-decision_view";
     Open_Asset_Xpath(AssetXpath,Asset_Type,Asset_Name);
     break;
   }  
  case "Fact Types":
  {
    AssetXpath="icon-fact_type";
    Open_Asset_Xpath(AssetXpath,Asset_Type,Asset_Name);
    break;
   } 
  default:
  {
    AssetXpath="icon-knowledge_source";
    Open_Asset_Xpath(AssetXpath,Asset_Type,Asset_Name);
    break;
    }
}
  
}


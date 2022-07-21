function Select_Asset_Xpath(Asset_path,Asset_Name)
{
  let page =Aliases.browser.pageSapiensDecision2;
    
    let Paginator;  
    let flag = "0";
    if(page.FindElements("//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
    //Log.Message(Paginator);
    
    let hasNext = "true";
    
    do{
         
          ItemCount = page.FindElements("//dcn-expandable-selectable-list-item//i[contains(@class,'"+Asset_path+"')]/following-sibling::div/a");
//          Log.Message(ItemCount.length);
//           Log.Message(Asset_Name);
          for(var j = 0; j < ItemCount.length ; j++)
          {
            
          let k=j+1;
                let HighlightedItemName = ItemCount[j].textContent.trim();
// Log.Message(HighlightedItemName);

                //If the Item Name matches 
                if(HighlightedItemName == Asset_Name.trim())
                {          
                        //To select amy row click on any icon available on the row
                        page.FindElement("//dcn-expandable-selectable-list-item["+k+"]//i[contains(@class,'"+Asset_path+"')]").click();
                        flag ="1";
                        //class="ui-selectable-row ng-star-inserted ui-state-highlight"
                        //Log.Message("Asset is Selected")  
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
              if(page.FindElement("//*[contains(@class,'i-paginator-next')]").Visible)
              {
                page.FindElement("//*[contains(@class,'i-paginator-next')]").click();  
                Delay(2000);
              }
              else
              {
                hasNext="fasle";
                break;
              }
            }
          }
          else
          {
            hasNext = "false";
          }
      

    }while(hasNext == "true")
    
}

function Select_SingleAsset(Asset_Type,Asset_Name){
  let AssetXpath;
switch (Asset_Type){
  
  case "Decision Flows":
  {
    AssetXpath= "icon-flow";
    Select_Asset_Xpath(AssetXpath,Asset_Name);
    break;
  }
  case "Decisions":
  {
    AssetXpath= "icon-decision_view";
     Select_Asset_Xpath(AssetXpath,Asset_Name);
     break;
   }  
  case "Fact Types":
  {
    AssetXpath="icon-fact_type";
    Select_Asset_Xpath(AssetXpath,Asset_Name);
    break;
   } 
  default:
  {
    AssetXpath="icon-knowledge_source";
    Select_Asset_Xpath(AssetXpath,Asset_Name);
    break;
    }
}
  
}


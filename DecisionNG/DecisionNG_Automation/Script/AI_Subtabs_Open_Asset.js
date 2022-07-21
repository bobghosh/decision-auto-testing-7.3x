var Breadcrumb_Verify_Navigation = require("Breadcrumb_Verify_Navigation");
function Versions_Assets_withClassname(Asset_Type,compared_assets,context_of_asset,classname)
{
  // Function for Opening asset from subtabs
  let page =Aliases.browser.pageSapiensDecision2
  Delay(1000);

  let source_assets_array_xpath="//dcn-additional-info//i[contains(@class,'"+classname+" icon')]//ancestor::div[contains(@class,'sub-tab__list')]"; 

  let source_assets_array= page.FindElements(source_assets_array_xpath);
  
  let expander_icon_assets=page.FindElements("//div[contains(@class,'item__expander-icon--wrapper')]");
  
  Log.Message("No of Assets displayed in Additional info"+source_assets_array.length);
  let Flag;
 Flag="false";
  
   let compared_asset_status=compared_assets.toString().split("|"); //Taksing asset and status from the data sheet
   Log.Message("Asset to open:  "+compared_asset_status)
 loop: for (let j=0;j<source_assets_array.length;j++)
  {
  
    let k=j+1;
   let source_asset=source_assets_array[j].TextContent.trim();
   let Asset_Status_AI;  //to store the status of the element
   
   //To Verify draft/Candidate asset
     
      let childElements=source_assets_array[j].childCount;
   if(Asset_Type == "Rule Family" || Asset_Type == "Knowledge Source")
   {
       if(childElements == 1)
       {
          Asset_Status_AI="Approved";
       } 
       
            else 
     {
       
       let statusicon=page.FindElement("("+source_assets_array_xpath+")["+k+"]//dcn-asset-state//dcn-entity-state");
 
     if (statusicon.getAttribute('class').includes("asset__status--draft"))
     {
        Asset_Status_AI="Draft";
         
     }
     else if (statusicon.getAttribute('class').includes("asset__status--candidate"))
     {
       Asset_Status_AI="Candidate";
            
     }
       
     }
   }
   else{

     if (childElements==2)
    {
      Asset_Status_AI="Approved";
     }
     else 
     {
       
       let statusicon=page.FindElement("("+source_assets_array_xpath+")["+k+"]//dcn-asset-state//dcn-entity-state");
 
     if (statusicon.getAttribute('class').includes("asset__status--draft"))
     {
        Asset_Status_AI="Draft";
         
     }
     else if (statusicon.getAttribute('class').includes("asset__status--candidate"))
     {
       Asset_Status_AI="Candidate";
            
     }
       
     }
     }
  //ends verification on status icon 
  
    //Log.Message(source_asset+' '+compared_asset_status[0]+' '+Asset_Status_AI+' '+compared_asset_status[1])
     if((source_asset==compared_asset_status[0]) && (Asset_Status_AI==compared_asset_status[1]))
     {
       Flag="true";
      //Verify Asset icon in additional info
      
      Log.Message(source_asset);
      Log.Message(Asset_Status_AI);
      
      let iconclass=page.FindElement("("+source_assets_array_xpath+"//i)["+k+"]").getAttribute('class');
      if(iconclass.includes(classname))
            {
              
              Log.Checkpoint(Asset_Type+" icon is Present");
              
              Log.Message("this is length of expander icon"+expander_icon_assets.length)
              
              
              if(expander_icon_assets.length>0)
              {
                Log.Message("Expander")
 
              let expander_icon=expander_icon_assets[j].lastChild; //to check plus expander icon exists
              Log.Message(expander_icon)
 
              //to Check Expander icon
                if((expander_icon_assets)[j].lastChild=="[HTMLElement]")
                    {
                        Log.Message("lastchild")
                        if(expander_icon.getAttribute('class').includes('expander-icon icon-link_plus'))
                        {
                          Log.Message("Expander pluss")
                         expander_icon.click();
                         let context_Elements=page.FindElements("//div[contains(@class,'sub-tab__list')]/dcn-link-label/parent::div//i[contains(@class,'context icon')]//following-sibling::div/a");
                         for(let index=0;index<context_Elements.length;index++)
                         {
                           context_element_text=context_Elements[index].TextContent.trim();
                           Log.Message(context_element_text)
                           
                           if(context_element_text==context_of_asset.trim())
                           {
                            context_Elements[index].click();
                             break;
                           }
                           else{
                             expander_icon.click();
                             continue loop;
                           }
                         }
                        }

                    } else
                    {
                      source_assets_array[j].click();
                      Log.Message("No context1")
                    }
                  }
                else{
              source_assets_array[j].click();
              Log.Message("No context")
              }           
            }
       else
       {
         Log.Error(Asset_Type+" icon is not Present");
       }
      
     // end -Verify Asset icon in additional info
     
    
     
  break;
  }
}

if((Flag=="true")&&((Asset_Type=="Decision Flow")||(Asset_Type=="Decision View")||(Asset_Type=="Rule Family")))
{
     page.WaitElement(page.FindElement("//div[contains(@class,'breadcrumb ng-star')]"));
  //Verify the opened Asset's breadcrumb
  Delay(5000);
Breadcrumb_Verify_Navigation.Breadcrumb_Verify_Navigation(compared_asset_status[0]);
  Log.Checkpoint(compared_asset_status[0] +" with "+ compared_asset_status[1]+" status is opened");

}
else if((Flag=="true")&&((Asset_Type=="Knowledge Source")||(Asset_Type=="Fact Type")))
{
  page.WaitElement(page.FindElement("//dcn-dialog//div[contains(@class,'dialog--format')]"));
  let heading_dialog=page.FindElement("//dcn-dialog//div[contains(@class,'dialog--format')]//h1").textContent.trim();
  
    Log.Checkpoint(Asset_Type+" Dialog opened successfully");
    
    Log.Message("Heading of the Dialog is "+heading_dialog);
    Delay(1000);
 
}

else{
      Log.Error(compared_asset_status[0] +" with status "+ compared_asset_status[1]+" doesn't exist");
   }
  
   
   
}



function AI_Subtab_Open_Asset(Asset_Type,Open_Asset,context_of_asset){
  let classname;
 
switch(Asset_Type)
{
  case "Flows":
   classname="icon-flow";
   Versions_Assets_withClassname("Decision Flow",Open_Asset,context_of_asset,classname);
   break;
  
  case "Decisions":
   classname="icon-decision_view";
   Versions_Assets_withClassname("Decision View",Open_Asset,context_of_asset,classname);
   //Log.Message("case decisions")
   break;
   
  case "Rule Families":
  classname="icon-rule_family_view";
  
  let Status=Open_Asset.toString().split("|");
  if(Status[1].toLowerCase().trim()=="draft")
  {
    context_of_asset=Project.Variables.Additional_Info_Task_with_assets+" / "+context_of_asset;
  //Log.Message(context_of_asset);
  }
   Versions_Assets_withClassname("Rule Family",Open_Asset,context_of_asset,classname);
   break;
  
  case "Fact Types":
  classname="icon-fact_type";
   Versions_Assets_withClassname("Fact Type",Open_Asset,context_of_asset,classname);
   break;
  
  default :
  classname="icon-knowledge_source";
   Versions_Assets_withClassname("Knowledge Source",Open_Asset,context_of_asset,classname);
   break;
  
}
}



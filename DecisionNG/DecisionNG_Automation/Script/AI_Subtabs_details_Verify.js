function Versions_Assets_withClassname(Asset_Type,compared_assets,classname)
{
  //Function for verifying details of subtabs
  let page =Aliases.browser.pageSapiensDecision2
  Delay(2000);
  let source_assets_array_xpath="//div[contains(@class,'sub-tab__list')]/dcn-link-label/parent::div";
  let source_assets_array= page.FindElements(source_assets_array_xpath);
  //Log.Message(classname)
  Log.Message("No of assets displayed in Additional info"+source_assets_array.length);
  let Flag;
  let compared_assets_array=compared_assets.toString().split(",");
for(let i=0;i<compared_assets_array.length;i++)
{
 Flag="false";
    
   let compared_asset_status=compared_assets_array[i].toString().split("|"); //Taksing asset and status from the data sheet
   Log.Message("Compared Asset:  "+compared_asset_status)
  for (let j=0;j<source_assets_array.length;j++)
  {
    let k=j+1;
   let source_asset=source_assets_array[j].TextContent.trim();
   let Asset_Status_AI;  //to store the status of the element
   
   //To Verify draft/Candidate asset
     
      let childElements=source_assets_array[j].childCount;
    if(Asset_Type == "Rule Family"||Asset_Type == "Knowledge Source")
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
  
      
     Log.Message(source_asset+compared_asset_status[0]+Asset_Status_AI+compared_asset_status[1])
     if((source_asset==compared_asset_status[0]) && (Asset_Status_AI==compared_asset_status[1]))
     {
       Flag="true";
    //Verify Asset icon in additional info
     
      let iconclass=page.FindElement("("+source_assets_array_xpath+"//i)["+k+"]").getAttribute('class');
      if(iconclass.includes(classname))
            {
              Log.Checkpoint(Asset_Type+" icon is Present");              
            }
       else
       {
         Log.Error(Asset_Type+" icon is not Present");
       }
      
     // end -Verify Asset icon in additional info
     
  break;
  }
}

if(Flag=="true")
{
  Log.Checkpoint(compared_asset_status[0] +" exist in the list of assets with Stauts as "+ compared_asset_status[1]);
}
else{
   Log.Error(compared_asset_status[0]+" doesn't exist in the list of assets with Status"+ compared_asset_status[1]);
   }
}

}

function AI_Verify_Subtab_Details_Assets(Asset_Type,Compared_Assets){
  let classname;
switch(Asset_Type)
{
  case "Flows":
   classname="icon-flow";
   Versions_Assets_withClassname("Decision Flow",Compared_Assets,classname);
   break;
  
  case "Decisions":
   classname="icon-decision_view";
   Versions_Assets_withClassname("Decision View",Compared_Assets,classname);
   break;
   
  case "Rule Families":
  classname="icon-rule_family_view";
   Versions_Assets_withClassname("Rule Family",Compared_Assets,classname);
   break;
  
  case "Fact Types":
  classname="icon-fact_type";
   Versions_Assets_withClassname("Fact Type",Compared_Assets,classname);
   break;
  
  default :
  classname="icon-knowledge_source";
   Versions_Assets_withClassname("Knowledge Source",Compared_Assets,classname);
   break;
  
}
}



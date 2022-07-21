 var page= Aliases.browser.pageSapiensDecision2
  
function AdditionalInfo_Verify_Icon_Title(asset,assetName)
{

  //Verify Asset Name and Icon
  switch(asset)
  {
        case "Decision":
          {
            let assetClass = page.FindElement("//dcn-additional-info//i").getAttribute('class');
            
            let assetText= page.FindElement("//dcn-additional-info//label").TextContent;
            
            if(assetClass.includes("decision_view"))
            {
              Log.Checkpoint("Decision View Icon is Present");              
            }
            else
            {
              Log.Error("Decision View Icon is Not Present")
            }
            if(assetText== assetName)
            {
              Log.Checkpoint("Decision View Name "+assetName+" matches with "+assetText+"");
            }
            else
            {
              Log.Error("Decision View Name "+assetName+" is not matching with "+assetText+"");
            }
            
            break;
          }
          
          
        case "Flow" :
          {
            let assetClass = page.FindElement("//dcn-additional-info//i").getAttribute('class');
            
            let assetText= page.FindElement("//dcn-additional-info//label").TextContent;
            
            if(assetClass.includes("flow"))
            {
              Log.Checkpoint("Decision Flow Icon is Present");              
            }
            else
            {
              Log.Error("Decision Flow Icon is not Present")
            }
            if(assetText== assetName)
            {
              Log.Checkpoint("Decision Flow Name "+assetName+" matches with "+assetText+"");
            }
            else
            {
              Log.Error("Decision Flow "+assetName+" is not matching with "+assetText+"")
            }
            
            
            break;
          }
          
          case "Rule Family" :
          {
            let assetClass = page.FindElement("//dcn-additional-info//i").getAttribute('class');
            
            let assetText= page.FindElement("//dcn-additional-info//label").TextContent;
            
            if(assetClass.includes("rule_family_view"))
            {
              Log.Checkpoint("Rule Family Icon is Present");              
            }
            else
            {
              Log.Error("Rule Family Icon is not Present")
            }
            if(assetText== assetName)
            {
              Log.Checkpoint("Rule Family Name "+assetName+" matches with "+assetText+"");
            }
            else
            {
              Log.Error("Rule Family "+assetName+" is not matching with "+assetText+"")
            }
            
            
            break;
          }
          
          
          case "Knowledge Source" :
          {
            let assetClass = page.FindElement("//dcn-additional-info//i").getAttribute('class');
            
            let assetText= page.FindElement("//dcn-additional-info//label").TextContent;
            
            if(assetClass.includes("knowledge_source"))
            {
              Log.Checkpoint("Knowledge Source Icon is Present");              
            }
            else
            {
              Log.Error("Knowledge Source Icon is not Present")
            }
            if(assetText== assetName)
            {
              Log.Checkpoint("Knowledge Source Name "+assetName+" matches with "+assetText+"");
            }
            else
            {
              Log.Error("Knowledge Source "+assetName+" is not matching with "+assetText+"")
            }
            
            
            break;
          }

          default :
          {
            let assetClass = page.FindElement("//dcn-additional-info//i").getAttribute('class');
            
            let assetText= page.FindElement("//dcn-additional-info//label").TextContent;
            
            if(assetClass.includes("fact_type"))
            {
              Log.Checkpoint("FactType Icon is Present");
              
            }
            else
            {
              Log.Error("FactType Icon is Not Present");
            }
            
            if(assetText== assetName)
            {
              Log.Checkpoint("FactType Name "+assetName+" matches with "+assetText+"");
            }
            else
            {
              Log.Error("FactType "+assetName+" is not matching with "+assetText+"")
            }
            
            break;
          }
  }
  
}

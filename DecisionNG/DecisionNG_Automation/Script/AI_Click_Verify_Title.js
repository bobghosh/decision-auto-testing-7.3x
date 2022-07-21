 var page= Aliases.browser.pageSapiensDecision2
 var add_InfoBtn = page.FindElement("//dcn-additional-info-side-bar//button")
  
function AdditionalInfo_Click_Verify_Title(asset,assetName)
{

  var add_Info_Disabled = add_InfoBtn.hasAttribute('disabled')
  
    if(add_Info_Disabled == false)
    {
      let add_Info_Panel = page.FindElement("//dcn-additional-info-side-bar//dcn-sidebar/p-sidebar");
      let childCountOf_Add_Info_Panel = add_Info_Panel.ChildCount
  
      if(childCountOf_Add_Info_Panel>0)
      {
        Log.Checkpoint("Additional Information Panel is opened");
      }
      else
      {
        add_InfoBtn.Click();
        page.WaitElement(page.FindElement("//*[@class='additional-info-container__tab-content']"),5000);
      }
//    add_InfoBtn.Click();
//  
//    page.WaitElement(page.FindElement("//*[@class='additional-info-container__tab-content']"),5000);
  
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
            if(assetText.trim()== assetName.trim())
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
            if(assetText.trim()== assetName.trim())
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
            if(assetText.trim()== assetName.trim())
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
            if(assetText.trim()== assetName.trim())
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
            
            if(assetText.trim()== assetName.trim())
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
  else
  {
    Log.Error("Additional Information panel is Disabled")
  }
  
}

function verify_Add_Info_Enabled_Disabled(verify_Enabled_Disabled)
{
  var add_Info_Disabled = add_InfoBtn.hasAttribute('disabled')
  if(verify_Enabled_Disabled == "Enabled")
  {
    if(add_Info_Disabled == false)
    {
      Log.Checkpoint("Additional Information Button is Enabled")
    }
    else
    {
      Log.Error("Additional Information Button is Disabled")
    }
  }
  else
  {
    if(add_Info_Disabled == true)
    {
      Log.Checkpoint("Additional Information Button is Disbaled")
    }
    else
    {
      Log.Error("Additional Information Button is Enabled")
    }
  }
}
function Select_Assets_Checkboxes(Tabs_Assets)
{
//  let Tabs_Assets = "Decision-Mortgage Effective Income Amount (View: Base) [V1.8],DecisionFlows-ATR QM Decision Flow [V1.1]";
  let Tab_Asset = Tabs_Assets.split(',');
  for(var i =0; i <Tab_Asset.length ; i++)
  {
    let Asset = Tab_Asset[i].split('-');
    
    let AssetType = Asset[0];
    let AssetName = Asset[1];
    
    if(AssetType == "Decision")
    {
      Aliases.browser.pageSapiensDecision2.FindElement("//*[text()='Decisions']").Click();
      
      let SearchAsset = AssetName.split('(');
      Aliases.browser.pageSapiensDecision2.linkCustomProperties.textbox.SetText(SearchAsset[0].trim());
      Log.Message(Aliases.browser.pageSapiensDecision2.linkCustomProperties.textbox.Text);
      
      Delay(10000);
      
      let Decisioncount = Aliases.browser.pageSapiensDecision.FindElements("//dcn-expandable-selectable-list-item//*[contains(@class,'icon-decision')]//ancestor::span");
 
      for(var j = 1; j <= Decisioncount.length ; j++)
      {
        //Mortgage DTI Ratio Compliance Indicator (View: Base) [V1.7]
        let DecisionName = Aliases.browser.pageSapiensDecision.FindElement("//dcn-expandable-selectable-list-item["+j+"]//*[contains(@class,'icon-decision')]//ancestor::dcn-link-label").textContent;
        Log.Message(DecisionName);
        if(DecisionName.includes(AssetName))
        {
          Aliases.browser.pageSapiensDecision.FindElement("//dcn-expandable-selectable-list-item["+j+"]//*[contains(@class,'icon-decision')]//ancestor::div[contains(@class,'dcn-expandable-selectable-list__item__wrapper')]//p-checkbox//div[contains(@class,'p-component')]").Click();
          break;
        }    
      }
    }
    
    if(AssetType == "Flows")
    {     
      Aliases.browser.pageSapiensDecision2.FindElement("//*[text()='Decision Flows']").Click();
      
      let SearchAsset = AssetName.split('[');
      Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText(SearchAsset[0].trim());
      Log.Message(Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.Text); 
      
      Delay(10000);
      
      let Flowscount = Aliases.browser.pageSapiensDecision.FindElements("//dcn-expandable-selectable-list-item//*[contains(@class,'icon-flow')]//ancestor::span");
 
      for(var k = 1; k <= Flowscount.length ; k++)
      {
        //Mortgage DTI Ratio Compliance Indicator (View: Base) [V1.7]
        let DecisionName = Aliases.browser.pageSapiensDecision.FindElement("//dcn-expandable-selectable-list-item["+k+"]//*[contains(@class,'icon-flow')]//ancestor::dcn-link-label").textContent;
        Log.Message(DecisionName);
        if(DecisionName.includes(AssetName))
        {
          Aliases.browser.pageSapiensDecision.FindElement("//dcn-expandable-selectable-list-item["+k+"]//*[contains(@class,'icon-flow')]//ancestor::div[contains(@class,'dcn-expandable-selectable-list__item__wrapper')]//p-checkbox//div[contains(@class,'p-component')]").Click();
          break;
          //ui-chkbox-icon ui-clickable
          //ui-chkbox-icon ui-clickable pi pi-check
        }    
      }
      
    }
    
  }
  
}
module.exports.Select_Assets_Checkboxes = Select_Assets_Checkboxes;
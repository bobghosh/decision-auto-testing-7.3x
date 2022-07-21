var Nav_Knowledge_Sources_Tab_verify = require("Nav_Knowledge_Sources_Tab_verify");
var Nav_Details_Tab_Verify = require("Nav_Details_Tab_Verify");
var Nav_Associations_Tab_Verify = require("Nav_Associations_Tab_Verify");
var Navigate_FactType_tab = require("Navigate_FactType_tab");
var Nav_RuleFamily_Tab_Verify = require("Nav_RuleFamily_Tab_Verify");
var Nav_Decision_Tab_verify = require("Nav_Decision_Tab_verify");
var Nav_Flows_Tab_Verify = require("Nav_Flows_Tab_Verify");
function Tab_Navigations_AllInOne_Click_verify(tabName)
{
  switch(tabName)
  {
    case "Decisions" : Nav_Decision_Tab_verify.Navigate_Decisions_tab_verify();
    break;
    case "Rule Families" : Nav_RuleFamily_Tab_Verify.Navigate_RuleFamily_tab_verify();
    break;
    case "Fact Types" : Navigate_FactType_tab.Navigate_FactType_tab_verify();
    break;
    case "Decision Flows" : Nav_Flows_Tab_Verify.Navigate_Decision_Flows_tab_verify();
    break;
    case "Details" : Nav_Details_Tab_Verify.Navigate_Details_tab_verify();
    break;
    case "Knowledge Sources" : Nav_Knowledge_Sources_Tab_verify.Navigate_Knowledge_Sources_tab_verify();
    break;
    case "Associations" : Nav_Associations_Tab_Verify.Navigate_Associations_tab_verify();
    break;
    default :
    Log.Error(tabName+" Tab does not exists");
    
  }
}
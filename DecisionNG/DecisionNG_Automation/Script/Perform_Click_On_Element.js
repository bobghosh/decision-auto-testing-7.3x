function Perform_Click_On_Element(Element)
{
  let page = Aliases.browser.pageSapiensDecision
  page.FindElement(Element).Click();
}
module.exports.Perform_Click_On_Element = Perform_Click_On_Element;
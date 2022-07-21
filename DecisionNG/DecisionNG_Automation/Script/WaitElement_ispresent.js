function Wait_Until_Element_ispresent(Element)
{
  let page = Aliases.browser.pageSapiensDecision2;
  page.WaitElement(page.FindElement(Element),30000)
}
module.exports.Wait_Until_Element_ispresent = Wait_Until_Element_ispresent;
function rightClickOnElementAndSelect(clickElement, option)
{
        let page = Aliases.browser.pageSapiensDecision2;
        
        page.FindElement(clickElement).ClickR();
         
        page.FindElement("//span[text()='"+option+"']").click();
        
}

function rightClickOnElementOnly(clickElement)
{
        let page = Aliases.browser.pageSapiensDecision2;
        
        page.FindElement(clickElement).ClickR();
        
 }

module.exports.rightClickOnElementAndSelect = rightClickOnElementAndSelect;
module.exports.rightClickOnElementOnly = rightClickOnElementOnly;
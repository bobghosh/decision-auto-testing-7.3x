function rightClickOnElementAndSelect(clickElement, option)
{
        let page = Aliases.browser.pageSapiensDecision2;
        
        page.FindElement(clickElement).ClickR();
         
        page.FindElement("//span[text()='"+option+"']").click();
        
}

module.exports.rightClickOnElementAndSelect = rightClickOnElementAndSelect;
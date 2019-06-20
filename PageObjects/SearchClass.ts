import {ElementFinder,browser, element,by} from "protractor";

export class SearchForm
{
    Formslist: ElementFinder;
    search: ElementFinder;
    Select:ElementFinder;

    constructor()
    {
    // this.search=browser.action().mouseMove(element(by.name("searchQuery"))).sendKeys("POM_test");  //browser.action().mouseMove(element(by.id("input#formSearchTextField.field"))).sendKeys("POM_test");
       browser.action().mouseMove(element(by.css("input[id='formSearchTextField']"))).sendKeys("POM_test");
    //    this.search=browser.action().mouseMove(element(by.id("input#formSearchTextField.field")));
       this.Select=browser.action().perform(element(by.css("submit")));

    }
}
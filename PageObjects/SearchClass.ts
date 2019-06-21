import {ElementFinder,browser, element,by,} from "protractor";

export class SearchForm
{
    Formslist: ElementFinder;
    search: ElementFinder;
    Select: ElementFinder;

    constructor()
    {
     //this.search=browser.actions().mouseMove(element(by.name("searchQuery")));
    // this.search=browser.actions().mouseMove(element(by.id("input#formSearchTextField.field")));
    this.search=browser.actions().mouseMove(element(by.css("input[id='formSearchTextField']")));
    this.Select=browser.actions().click(element(by.css("submit")));


    }
}
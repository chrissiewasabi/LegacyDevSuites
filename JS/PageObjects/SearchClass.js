"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SearchForm {
    constructor() {
        //this.search=browser.actions().mouseMove(element(by.name("searchQuery"))).sendKeys("POM_test");  
        // this.search=browser.actions().mouseMove(element(by.id("input#formSearchTextField.field"))).sendKeys("POM_test");
        this.search = protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.css("input[id='formSearchTextField']"))).sendKeys("POM_test");
        this.Select = protractor_1.browser.actions().click(protractor_1.element(protractor_1.by.css("submit")));
    }
}
exports.SearchForm = SearchForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQ2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9TZWFyY2hDbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4RDtBQUU5RCxNQUFhLFVBQVU7SUFNbkI7UUFFQyxrR0FBa0c7UUFDbkcsbUhBQW1IO1FBQ25ILElBQUksQ0FBQyxNQUFNLEdBQUMsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqSCxJQUFJLENBQUMsTUFBTSxHQUFDLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHL0QsQ0FBQztDQUNKO0FBZkQsZ0NBZUMifQ==
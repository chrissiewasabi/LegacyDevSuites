"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SearchForm {
    constructor() {
        // this.search=browser.action().mouseMove(element(by.name("searchQuery"))).sendKeys("POM_test");  //browser.action().mouseMove(element(by.id("input#formSearchTextField.field"))).sendKeys("POM_test");
        protractor_1.browser.action().mouseMove(protractor_1.element(protractor_1.by.css("input[id='formSearchTextField']"))).sendKeys("POM_test");
        //    this.search=browser.action().mouseMove(element(by.id("input#formSearchTextField.field")));
        this.Select = protractor_1.browser.action().perform(protractor_1.element(protractor_1.by.css("submit")));
    }
}
exports.SearchForm = SearchForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQ2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9TZWFyY2hDbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2RDtBQUU3RCxNQUFhLFVBQVU7SUFNbkI7UUFFQSx1TUFBdU07UUFDcE0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RyxnR0FBZ0c7UUFDN0YsSUFBSSxDQUFDLE1BQU0sR0FBQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5FLENBQUM7Q0FDSjtBQWRELGdDQWNDIn0=
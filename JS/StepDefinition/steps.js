"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_cucumber_framework_1 = require("protractor-cucumber-framework");
const LoginClass_1 = require("../PageObjects/LoginClass");
const SearchClass_1 = require("../PageObjects/SearchClass");
const protractor_1 = require("protractor");
let t2 = new SearchClass_1.SearchForm();
let t1 = new LoginClass_1.login();
cucumber_1.Given('I access Magpi Dev', { timeout: 2 * 10000 }, () => __awaiter(this, void 0, void 0, function* () {
    global.Angularsite(false); //non-Angular site
    yield protractor_1.browser.get("http://datadyne-dev.com/login/auth");
}));
cucumber_1.When('I enter {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield t1.firstEditBox.sendKeys(string);
    yield t1.second.sendKeys(string2);
}));
cucumber_1.Then('A {string} will occur', (string) => __awaiter(this, void 0, void 0, function* () {
    yield t1.go.click();
}));
cucumber_1.Given('I am logged into forms dash', () => __awaiter(this, void 0, void 0, function* () {
    global.Angularsite(false); //non-Angular site
    protractor_1.browser.get("http://datadyne-dev.com/forms-dashboard");
}));
cucumber_1.When('{string} is entered in search box', (string) => __awaiter(this, void 0, void 0, function* () {
    yield t2.search.sendKeys("POM_test");
}));
protractor_cucumber_framework_1.And('{string} button is selected', (string) => __awaiter(this, void 0, void 0, function* () {
    yield t2.Select.click;
}));
cucumber_1.Then('{string} will be displayed', (string) => __awaiter(this, void 0, void 0, function* () {
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbi9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQXlDO0FBQ3pDLGlGQUFrRDtBQUNsRCwwREFBK0M7QUFDL0MsNERBQXFEO0FBQ3JELDJDQUFrQztBQUdsQyxJQUFJLEVBQUUsR0FBQyxJQUFJLHdCQUFVLEVBQUUsQ0FBQztBQUN4QixJQUFJLEVBQUUsR0FBQyxJQUFJLGtCQUFLLEVBQUUsQ0FBQztBQUVuQixnQkFBSyxDQUFFLG9CQUFvQixFQUFFLEVBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUMsRUFBRSxHQUFRLEVBQUU7SUFDMUQsTUFBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLGtCQUFrQjtJQUNyRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7QUFFMUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywrQkFBK0IsRUFBSSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUMvRCxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVMLGVBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQzVDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN0QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZ0JBQUssQ0FBRSw2QkFBNkIsRUFBRSxHQUFTLEVBQUU7SUFDOUMsTUFBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLGtCQUFrQjtJQUNwRCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUUsbUNBQW1DLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUMxRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxtQ0FBRyxDQUFFLDZCQUE2QixFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDbEQsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUN4QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7QUFFbkQsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9
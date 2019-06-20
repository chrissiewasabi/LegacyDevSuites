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
const LoginClass_1 = require("../PageObjects/LoginClass");
const protractor_1 = require("protractor");
let t1 = new LoginClass_1.login();
cucumber_1.Given('I access Magpi Dev', { timeout: 2 * 10000 }, () => __awaiter(this, void 0, void 0, function* () {
    global.Angularsite(false); //non-Angular site
    yield protractor_1.browser.get("http://datadyne-dev.com/login/auth");
    //browser.ignoreSynchronization = true;
}));
cucumber_1.When('I enter {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield t1.firstEditBox.sendKeys(string);
    yield t1.second.sendKeys(string2);
}));
cucumber_1.Then('A {string} will occur', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield t1.go.click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbi9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTJDO0FBQzNDLDBEQUErQztBQUUvQywyQ0FBa0M7QUFHbEMsSUFBSSxFQUFFLEdBQUMsSUFBSSxrQkFBSyxFQUFFLENBQUM7QUFFbkIsZ0JBQUssQ0FBRSxvQkFBb0IsRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFDLEVBQUUsR0FBUSxFQUFFO0lBQzFELE1BQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxrQkFBa0I7SUFDckQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQzFELHVDQUF1QztBQUV2QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLCtCQUErQixFQUFJLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQy9ELE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUwsZUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDNUMsb0VBQW9FO0lBQ3BFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN0QixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=
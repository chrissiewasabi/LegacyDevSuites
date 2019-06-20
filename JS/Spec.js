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
const protractor_1 = require("protractor");
const LoginClass_1 = require("./PageObjects/LoginClass");
describe("Working with the Forms dashboard", () => {
    global.Angularsite(false); //non-Angular site
    it("Search form", () => __awaiter(this, void 0, void 0, function* () {
        let t1 = new LoginClass_1.login();
        protractor_1.browser.get("http://datadyne-dev.com/login/auth");
        yield t1.firstEditBox.sendKeys("jada");
        yield t1.second.sendKeys("datdat").then(() => __awaiter(this, void 0, void 0, function* () {
            yield t1.go.click();
        }));
    }));
    // it("Search form", async ()=> {
    //     let t2=new SearchForm();
    //     // await browser.get("http://datadyne-dev.com/forms-dashboard");
    //     await t2.search.sendKeys("POM_test");
    //      //await t2.Select.click;  
    // await browser.sleep(2000);
    //       });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL1NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUF1QztBQUd2Qyx5REFBaUQ7QUFFakQsUUFBUSxDQUFDLGtDQUFrQyxFQUFFLEdBQUUsRUFBRTtJQUM5QyxNQUFjLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsa0JBQWtCO0lBQ3ZELEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBUSxFQUFFO1FBQzFCLElBQUksRUFBRSxHQUFDLElBQUksa0JBQUssRUFBRSxDQUFDO1FBRWIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUNsRCxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVEsRUFBRTtZQUNsRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFcEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFVCxpQ0FBaUM7SUFDakMsK0JBQStCO0lBRS9CLHVFQUF1RTtJQUN2RSw0Q0FBNEM7SUFDNUMsa0NBQWtDO0lBQzFCLDZCQUE2QjtJQUNyQyxZQUFZO0FBRVosQ0FBQyxDQUFDLENBQUMifQ==
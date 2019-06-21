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
const SearchClass_1 = require("./PageObjects/SearchClass");
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
    it("Search form", () => __awaiter(this, void 0, void 0, function* () {
        let t2 = new SearchClass_1.SearchForm();
        yield protractor_1.browser.get("http://datadyne-dev.com/forms-dashboard");
        yield t2.search.sendKeys("POM_test");
        yield t2.Select.click;
        //missing step, I'll add this later
        yield protractor_1.browser.sleep(2000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL1NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUF1QztBQUd2Qyx5REFBaUQ7QUFDakQsMkRBQXVEO0FBQ3ZELFFBQVEsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFFLEVBQUU7SUFDOUMsTUFBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLGtCQUFrQjtJQUN2RCxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQVEsRUFBRTtRQUMxQixJQUFJLEVBQUUsR0FBQyxJQUFJLGtCQUFLLEVBQUUsQ0FBQztRQUViLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFRLEVBQUU7WUFDbEQsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXBCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRVQsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFRLEVBQUU7UUFDeEIsSUFBSSxFQUFFLEdBQUMsSUFBSSx3QkFBVSxFQUFFLENBQUM7UUFFeEIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBQzdELE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN0QixtQ0FBbUM7UUFDaEMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVQsQ0FBQyxDQUFDLENBQUMifQ==
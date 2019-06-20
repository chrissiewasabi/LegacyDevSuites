import {browser, By} from "protractor";
import { element, by} from "protractor";
import { async } from "q";
import { login } from "./PageObjects/LoginClass";
import { SearchForm } from "./PageObjects/SearchClass";
describe("Working with the Forms dashboard", ()=> {
  (global as any).Angularsite(false);//non-Angular site
it("Search form", async ()=> {
  let t1=new login();

        browser.get("http://datadyne-dev.com/login/auth");
        await t1.firstEditBox.sendKeys("jada");
        await t1.second.sendKeys("datdat").then(async() =>{
        await t1.go.click();
              
        });
      });

// it("Search form", async ()=> {
//     let t2=new SearchForm();
    
//     // await browser.get("http://datadyne-dev.com/forms-dashboard");
//     await t2.search.sendKeys("POM_test");
//      //await t2.Select.click;  
        // await browser.sleep(2000);
//       });

});
import {Given,Then,When  } from "cucumber";
import{login} from "../PageObjects/LoginClass";
import{SearchForm} from "../PageObjects/SearchClass";
import{browser} from "protractor";
import { async } from "q";

let t1=new login();

Given ('I access Magpi Dev', {timeout: 2 * 10000}, async ()=>{
  (global as any).Angularsite(false);//non-Angular site
  await browser.get("http://datadyne-dev.com/login/auth");

});

When('I enter {string} and {string}',   async (string, string2)=> {
  await t1.firstEditBox.sendKeys(string);
    await t1.second.sendKeys(string2);
  }); 

Then('A {string} will occur', async (string)=> {
  // Write code here that turns the phrase above into concrete actions
  await t1.go.click();
});

import {Given,When,Then} from "cucumber";
import {And} from "protractor-cucumber-framework";
import{login} from "../PageObjects/LoginClass";
import{SearchForm} from "../PageObjects/SearchClass";
import{browser} from "protractor";
import { async } from "q";

let t2=new SearchForm();
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
  await t1.go.click();
});


Given ('I am logged into forms dash', async () =>{
  (global as any).Angularsite(false);//non-Angular site
   browser.get("http://datadyne-dev.com/forms-dashboard");
});

When ('{string} is entered in search box', async (string) => {
  await t2.search.sendKeys("POM_test");
});

And ('{string} button is selected', async (string)=>{
  await t2.Select.click;  
});

Then('{string} will be displayed', async (string)=> {
  //return pending
});



import {Config, browser} from "protractor";
import { login } from "./PageObjects/LoginClass";
// import {config} from "protractor";

exports.config = {  
//seleniumAddress: 'http://localhost:4444/wd/hub',
framework:'custom',
frameworkPath: require.resolve('protractor-cucumber-framework'),
 directConnect: true,
 capabilities: {
  browserName: 'chrome'
},
specs: ['../Features/task.feature'],
cucumberOpts: {

  require: [
   './StepDefinition/*.js',] // accepts a glob,
  },
  
onPrepare:()=>{
(global as any).Angularsite=function(flag:boolean){
  browser.ignoreSynchronization=!flag;
}
}

  };


// tsc- init - for typscript config file
//npm init for package.json
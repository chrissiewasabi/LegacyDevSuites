
import {Config, browser} from "protractor";

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



//npm run cucumber to run cucumber test defined in package.json
import {Config, browser} from "protractor";
// import {config} from "protractor";

exports.config = {  
//seleniumAddress: 'http://localhost:4444/wd/hub',
//  framework: 'custom',
//  frameworkPath:require.resolve('protractor-cucumber-framework'),
//  directConnect: true,

/// 21 june 2019
  
specs: ['Spec.js'],  
  
onPrepare:()=>{
(global as any).Angularsite=function(flag:boolean){
  browser.ignoreSynchronization=!flag;
}
}

  };

  
// tsc init -f for ts config file tsconfig.json. Define output dir in tsconfig.json for JS files to compiler JS files when tsc is used
//npm init for package.json
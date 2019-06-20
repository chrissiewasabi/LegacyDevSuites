"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
// import {config} from "protractor";
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['Spec.js'],
    cucumberOpts: {},
    onPrepare: () => {
        global.Angularsite = function (flag) {
            protractor_1.browser.ignoreSynchronization = !flag;
        };
    }
};
// tsc- init - for typscript config file
//npm init for package.json
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBMkM7QUFFM0MscUNBQXFDO0FBRXJDLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDakIsa0RBQWtEO0lBQ2xELFNBQVMsRUFBQyxRQUFRO0lBQ2xCLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQzlELGFBQWEsRUFBRSxJQUFJO0lBQ25CLFlBQVksRUFBRTtRQUNiLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQ2xCLFlBQVksRUFBRSxFQUVYO0lBRUgsU0FBUyxFQUFDLEdBQUUsRUFBRTtRQUNiLE1BQWMsQ0FBQyxXQUFXLEdBQUMsVUFBUyxJQUFZO1lBQy9DLG9CQUFPLENBQUMscUJBQXFCLEdBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdEMsQ0FBQyxDQUFBO0lBQ0QsQ0FBQztDQUVFLENBQUM7QUFHSix3Q0FBd0M7QUFDeEMsMkJBQTJCIn0=
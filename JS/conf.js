"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
// import {config} from "protractor";
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //  framework: 'custom',
    //  frameworkPath:require.resolve('protractor-cucumber-framework'),
    //  directConnect: true,
    /// 21 june 2019
    specs: ['Spec.js'],
    onPrepare: () => {
        global.Angularsite = function (flag) {
            protractor_1.browser.ignoreSynchronization = !flag;
        };
    }
};
// tsc init -f for ts config file tsconfig.json. Define output dir in tsconfig.json for JS files to compiler JS files when tsc is used
//npm init for package.json
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMkM7QUFDM0MscUNBQXFDO0FBRXJDLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDakIsa0RBQWtEO0lBQ2xELHdCQUF3QjtJQUN4QixtRUFBbUU7SUFDbkUsd0JBQXdCO0lBRXhCLGdCQUFnQjtJQUVoQixLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFFbEIsU0FBUyxFQUFDLEdBQUUsRUFBRTtRQUNiLE1BQWMsQ0FBQyxXQUFXLEdBQUMsVUFBUyxJQUFZO1lBQy9DLG9CQUFPLENBQUMscUJBQXFCLEdBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdEMsQ0FBQyxDQUFBO0lBQ0QsQ0FBQztDQUVFLENBQUM7QUFHSixzSUFBc0k7QUFDdEksMkJBQTJCIn0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../Features/task.feature'],
    cucumberOpts: {
        require: [
            './StepDefinition/*.js',
        ] // accepts a glob,
    },
    onPrepare: () => {
        global.Angularsite = function (flag) {
            protractor_1.browser.ignoreSynchronization = !flag;
        };
    }
};
//npm run cucumber to run cucumber test defined in package.json
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXJjb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQTJDO0FBRTNDLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDakIsa0RBQWtEO0lBQ2xELFNBQVMsRUFBQyxRQUFRO0lBQ2xCLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQzlELGFBQWEsRUFBRSxJQUFJO0lBQ25CLFlBQVksRUFBRTtRQUNiLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsWUFBWSxFQUFFO1FBRVosT0FBTyxFQUFFO1lBQ1IsdUJBQXVCO1NBQUUsQ0FBQyxrQkFBa0I7S0FDNUM7SUFFSCxTQUFTLEVBQUMsR0FBRSxFQUFFO1FBQ2IsTUFBYyxDQUFDLFdBQVcsR0FBQyxVQUFTLElBQVk7WUFDL0Msb0JBQU8sQ0FBQyxxQkFBcUIsR0FBQyxDQUFDLElBQUksQ0FBQztRQUN0QyxDQUFDLENBQUE7SUFDRCxDQUFDO0NBRUUsQ0FBQztBQUlKLCtEQUErRCJ9
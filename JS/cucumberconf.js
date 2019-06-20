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
// tsc- init - for typscript config file
//npm init for package.json
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXJjb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQTJDO0FBRTNDLHFDQUFxQztBQUVyQyxPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ2pCLGtEQUFrRDtJQUNsRCxTQUFTLEVBQUMsUUFBUTtJQUNsQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUM5RCxhQUFhLEVBQUUsSUFBSTtJQUNuQixZQUFZLEVBQUU7UUFDYixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUNELEtBQUssRUFBRSxDQUFDLDBCQUEwQixDQUFDO0lBQ25DLFlBQVksRUFBRTtRQUVaLE9BQU8sRUFBRTtZQUNSLHVCQUF1QjtTQUFFLENBQUMsa0JBQWtCO0tBQzVDO0lBRUgsU0FBUyxFQUFDLEdBQUUsRUFBRTtRQUNiLE1BQWMsQ0FBQyxXQUFXLEdBQUMsVUFBUyxJQUFZO1lBQy9DLG9CQUFPLENBQUMscUJBQXFCLEdBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdEMsQ0FBQyxDQUFBO0lBQ0QsQ0FBQztDQUVFLENBQUM7QUFHSix3Q0FBd0M7QUFDeEMsMkJBQTJCIn0=
// to install webdriver use npm run on any of the script comands in package.json.  e.g npm run webdriver-update / npm run protractor ..

exports.config = {  
//seleniumAddress: 'http://localhost:4444/wd/hub',
 directConnect: true,
framework:'jasmine',
specs: ['Login.js'],  
  //browser.driver.manager().window().maximize();
  suites :
	{
    Login: 'Login.js',
    Formsearch: 'Formsearch.js'
	},
  
jasmineNodeOpts: { //Options to be passed to Jasmine-node.
  showColors: true, // Use colors in the command line report.
  defaultTimeoutInterval: 30000
}
  };



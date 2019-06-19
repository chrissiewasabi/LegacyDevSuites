describe("User Validation", function() {
   
    it("Login occurs given correct credentials", function() {
        browser.waitForAngularEnabled(false); //non-Angular site
        browser.get("http://datadyne-dev.com/login/auth");
        element(by.name("j_username")).sendKeys("jada");
        element(by.name("j_password")).sendKeys("datdat").then(function(){
            element(by.css("btn.btn-lg.btn-primary.btn-block.btn-signin")).click(); 
            browser.sleep(4000);

        }); 
       });  });
Feature: Validating log in 
@login
Scenario: Login 

Given I access Magpi Dev
When I enter "jada" and "datdat"
Then A "Login" will occur


# Scenario: Form search
# @search
# Given I'm logged into form's dash
# When "POM_test" is entered in search box
# And "Search" button is selected
# Then "POM_test" will be displayed



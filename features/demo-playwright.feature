@demo
Feature: Sample test scenarios for playwright bdd framework

    @playwright @accessibility
    Scenario: Playwright search demo
        Given I navigate to "playWrightUrl"
        When I run accessibility "wcag2aa" check on current page
        Then I click "playWrightSearchIcon"
        When I enter "TimeOut" into "playWrightSearchBox"
        Then I click "playWrightSearchResult"
        Then I verify "searchTitle" text is display at "pageTitle"

    @form
    Scenario: Playwright search demo
        Given I navigate to "techUrl"
        Then I select "AgreementCheckBox" checkbox
        When I enter "TimeOut" into "techName"
        When I take current page screenshot
        When I select "Business" from "OrgDropDownBox"
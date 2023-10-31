@demo
Feature: Google search functionality for multiple serach terms

    @google
    Scenario Outline: Google search demo
        Given I navigate to "googleUrl"
        When I enter "<searchTerm>" into "googleSearchBox"
        Then I wait for "1" seconds
        Examples:
            | searchTerm |
            | Python     |
            | Javascript |

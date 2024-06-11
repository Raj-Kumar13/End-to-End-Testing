
Feature: As a OrangeHRM portal user I want to search/create record
    @demo
    Scenario: Lauch the OrangeHRM Portal url and login
        Given User launches to the OrangeHRM portal
        When User logs in to the OrangeHRM application
            | OrangeHRM |
        Then Verify User navigates to correct landing page

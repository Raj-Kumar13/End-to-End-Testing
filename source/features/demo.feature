Feature: Demo feature

   @demo
    Scenario Outline: run first demo feature

        Given Google page is opened
       # When Search with <SearchItem>
       # Then Click on the first Searched result
       # Then URL should match <ExpectedURL>

        Examples:
            | Test_ID    | SearchItem | ExpectedURL           |
            | Demo_Test1 | WDIO       | https://webdriver.io/ |
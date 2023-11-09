Feature: Deneme feature

    # Scenario: scenario ornek
    #     Given user goes to home page
    #     When user click on login button
    #     Then user should be on login page

    #     When user enters email "kesifplussatici@mailsac.com"
    #     When user enters password "e*y7G2xhsTVAi5u"
    #     When user login
    #     Then user should be in weekly order page


    # Scenario: scenario icinde bilgi gonderme
    #     Given user send int 24
    #     When user send double 3.4
    #     Then user send boolean "true"


    # Scenario Outline: scenario outline sample
    #     Given user goes to home page
    #     When user click on login button
    #     Then user should be on login page

    #     When user enters email "<userEmail>"
    #     When user enters password "<userPassword>"
    #     When user login
    #     Then user should be in weekly order page
    #     Examples:
    #         | userEmail                   | userPassword    |
    #         | kesifplussatici@mailsac.com | e*y7G2xhsTVAi5u |
    #         | kesifplusalici@mailsac.com  | e*y7G2xhsTVAi5u |

    @Deneme
    Scenario: scenario datatable
        Given user goes to home page
        When user click on login button
        Then user should be on login page

        When user enters email "kesifplussatici@mailsac.com"
        When user enters password "e*y7G2xhsTVAi5u"
        When user login
        Then user should be in weekly order page

        When user send zipcode
        Then user should be able to see
            | navbar    | index |
            | Account   | 0     |
            | Address   | 1     |
            | Orders    | 2     |
            | Events    | 3     |
            | My Events | 4     |

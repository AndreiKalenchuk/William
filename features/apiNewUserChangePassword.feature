Feature: New user can register then login and change password after cal log in with new password

  Scenario: new user register by api
    Then Register new user
    And Api login "new"
#    And Verify user role "new"

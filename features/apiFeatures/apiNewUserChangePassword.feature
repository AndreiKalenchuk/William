Feature: New user can register then login and change password after cal log in with new password

  Scenario: new user register by api
    Then Register new user, verify status, message

  Scenario: new user login, Admin get user by id, verify all credentials
    Then Api login "new"
    And Admin get "new" user by userId


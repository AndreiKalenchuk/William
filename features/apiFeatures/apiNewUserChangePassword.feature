Feature: New user can register then login and change password after cal log in with new password

  Scenario: new user register by api
    Then Api login "admin"
    And Register new user, verify status, message

  Scenario: new user login, Admin get user by id, verify all credentials
    Then Api login "new"
    And Admin get "new" user by userId

  Scenario: New user change a password and login with new password
    Then "new" user change "password" to "hello"
    And Api login "new"
    And Delete "new" user

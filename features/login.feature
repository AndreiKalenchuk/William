Feature: User with different roles can login
Background: Given I Open the page "login"
  Scenario Outline: As a existing user, I can log with valid credentials
    Given I Open the page "login"
    When "<userRole>" login with valid credentials
    Then User on "profile" page
    And Log out
    And User on "login" page

    Examples:
      | userRole |
      | admin    |
      | learner  |
      | student  |

  Scenario: Should not be log in with invalid credentials
    When "" login with not valid credentials
    Then User on "login" page


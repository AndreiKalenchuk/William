Feature: User with different roles can login

  Scenario Outline: As a existing user, I can log with valid credentials
    Given I Open the page "login"
    When <userRole> login with valid credentials
    Then User on "profile" page
    And Log out
    And User on "<login>" page

    Examples:
      | userRole |
      | admin    |
      | learner  |
      | student  |

  Scenario Outline: Should not be log in with invalid credentials
    Given I Open the page "login"
    When <userRole> login with not valid credentials
    Then User on "login" page

    Examples:
      | userRole |
      | invalid  |

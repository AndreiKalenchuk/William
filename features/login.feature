Feature: User with different roles can login

  Scenario: As a user, I can log in app

    Given I Open the page "login"
  # Given I Open the url "https://google.com/"
    When admin login with valid credentials
    Then User on "profile" page
  #  When Login with <email> and <password>
 #   Then Should see <userName> on the profile page
 #   And Log out

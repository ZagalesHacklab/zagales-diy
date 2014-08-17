require 'test_helper'

class ChallengesControllerTest < ActionController::TestCase
  fixtures :challenges

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:challenges)

  end

end

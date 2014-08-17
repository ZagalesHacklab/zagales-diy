class ChallengesController < ApplicationController
  def index
    @challenges = Challenge.all
  end

  def show

  end
end

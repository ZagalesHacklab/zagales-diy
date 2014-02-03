require_relative '../spec_helper'
require_relative '../../api'
require_relative '../../routes/challenges'
require 'rack/test'

describe 'challenges routes' do
  include Rack::Test::Methods

  def app
    ZagalesApi.new
  end

  it 'responds to /api/challenges uri' do
    get '/api/challenges'

    expect(last_response.status).to be 200
    expect(last_response.content_type).to include 'application/json;charset=utf-8'
  end

	it 'responds support cors domain requests' do
		get '/api/challenges'
		expect(last_response.headers).to include 'Access-Control-Allow-Origin'
		expect(last_response.headers).to include 'Access-Control-Allow-Methods'
	end
end
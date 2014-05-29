require_relative '../spec_helper'
require_relative '../../api'
require_relative '../../routes/challenges'
require 'rack/test'

describe 'challenges routes' do
  include Rack::Test::Methods

  def app
    ZagalesApi
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

  describe 'POST' do
    let(:challenge){{challenge: {title: 'foo', username: 'perico'}}}

    it 'returns the object when save' do
      post '/api/challenges', challenge
      response = JSON.parse(last_response.body)
      expect(response[:username]).to eql challenge[:username]
      expect(response['id']).to be
    end
  end
end

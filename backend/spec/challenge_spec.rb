ENV['RACK_ENV'] = 'test'

require 'spec_helper'
require_relative '../api/challenge'
require 'rack/test'

describe 'The HelloWorld App' do
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  it 'says hello' do
    get '/api/challenge'
    expect(last_response).to be_ok
    expect(last_response.body).to eq('Hello World')
  end

  it 'says hello pepe' do
    get '/api/challenge?name=pepe'
    expect(last_response).to be_ok
    expect(last_response.body).to eq('Hello World pepe')
  end
end
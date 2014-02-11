#!/usr/bin/env ruby
#encoding: UTF-8

require 'sinatra/base'
require 'json'

require_relative 'models/init'
require_relative 'routes/init'

class ZagalesApi < Sinatra::Base
  enable :method_override
  enable :sessions
  set :session_secret, 'super secret'

  configure do
    set :app_file, __FILE__

    #TODO: use persistent database, remove mocks
    DataMapper.setup(:default, :adapter => 'in_memory')
    challenges = JSON.parse(open('../frontend/test/mocks/challenges.json').read)
    challenges.each do |challenge|
      Challenge.new(challenge).save!
    end
  end

  configure :development do
    enable :logging, :dump_errors, :raise_errors
  end

  configure :qa do
    enable :logging, :dump_errors, :raise_errors
  end

  configure :production do
    set :raise_errors, false #false will show nicer error page
    set :show_exceptions, false #true will ignore raise_errors and display backtrace in browser
  end

  before do
    #headers 'Access-Control-Allow-Origin' => 'http://localhost:9000',
    headers 'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']
  end
end

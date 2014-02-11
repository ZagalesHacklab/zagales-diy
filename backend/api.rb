#!/usr/bin/env ruby
#encoding: UTF-8

require 'sinatra/base'
require 'json'
require 'data_mapper'

require_relative 'models/init'
require_relative 'routes/init'

class ZagalesApi < Sinatra::Base
  enable :method_override
  enable :sessions
  set :session_secret, 'super secret'

  configure do
    set :app_file, __FILE__

    db = File.join(File.dirname(__FILE__), 'zagales-diy.db')
    DataMapper.setup(:default, "sqlite3://#{db}")
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

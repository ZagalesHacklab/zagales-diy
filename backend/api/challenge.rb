#!/usr/bin/env ruby
#encoding: UTF-8

require 'sinatra'

get '/api/challenge' do
  "Hello World #{params[:name]}".strip
end
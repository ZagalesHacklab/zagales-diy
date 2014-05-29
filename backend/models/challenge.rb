require 'rubygems'
require 'dm-core'
require 'dm-types'
require 'dm-serializer'
require 'dm-validations'


class Challenge
  include DataMapper::Resource
  include DataMapper::Validate

  property :id, Serial
  property :title, Text, :required => true
  property :image, URI
  property :username, Text
  property :avatar, URI
  property :tags, Text
end

DataMapper.finalize

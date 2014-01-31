require 'rubygems'
require 'dm-core'
require 'dm-types'
require 'dm-serializer'


class Challenge
  include DataMapper::Resource

  property :id, Serial
  property :name, Text
  property :image, URI
  property :username, Text
  property :avatar, URI
  property :tags, Text
end

DataMapper.finalize
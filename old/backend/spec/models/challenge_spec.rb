require_relative '../spec_helper'
require_relative '../../api'
require_relative '../../models/challenge'
require 'rack/test'

describe 'challenge model' do
  include Rack::Test::Methods

  before(:all) do
    DataMapper.setup(:default, :adapter => 'in_memory')
  end

  it 'should exist' do
    challenge = Challenge.new
    challenge.should be_an_instance_of(Challenge)
  end

  it 'should propper store attributes' do
    expected = Challenge.new
    expected.title='dummy challenge'
    expected.image='http://dummy.com/image.png'
    expected.username='liborio'
    expected.avatar='http://dummy.com/avatar.png'
    expected.tags='one,two'

    expected.save

    actual = Challenge.get(expected.id)

    expect(actual.title).to be expected.title
    expect(actual.image).to eq expected.image
    expect(actual.username).to be expected.username
    expect(actual.avatar).to eq expected.avatar
    expect(actual.tags).to be expected.tags

  end


end

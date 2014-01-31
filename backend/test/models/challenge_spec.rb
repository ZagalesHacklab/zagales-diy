require_relative '../spec_helper'
require_relative '../../api'
require_relative '../../models/challenge'
require 'rack/test'

describe 'challenge model' do
  include Rack::Test::Methods


  it 'should exist' do
    challenge = Challenge.new
    challenge.should be_an_instance_of(Challenge)
  end

  it 'should propper store attributes' do
    expected = Challenge.new
    expected.name='dummy challenge'
    expected.image='http://dummy.com/image.png'
    expected.username='liborio'
    expected.avatar='http://dummy.com/avatar.png'
    expected.tags='one,two'

    expected.save

    actual = Challenge.get(expected.id)

    expect(actual.name).to be expected.name



  end


end
require 'test_helper'

class ChallengeTest < ActiveSupport::TestCase

  test 'challenge attributes must not be empty' do
    challenge = Challenge.new
    assert challenge.invalid?
    assert challenge.errors[:title].any?
    assert challenge.errors[:description].any?
    assert challenge.errors[:image_url].any?
  end

  def new_challenge (image_url)
    Challenge.new(title:       'A challenge',
                  description: 'Lorem Ipsum',
                  image_url:   image_url)
  end

  test 'image url' do
    ok = %w{ fred.gif fred.jpg fred.png FRED.JPG FRED.Jpg http://a.b.c/x/y/z/fred.gif }
    bad = %w{ fred.doc fred.gif/more fred.gif.more }

    ok.each do |url|
      assert new_challenge(url).valid?, "​#{url}​ should be valid"
    end

    bad.each do |url|
      assert new_challenge(url).invalid?, "​#{url}​ shouldn't be valid"
    end
  end

end

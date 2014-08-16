class Challenge < ActiveRecord::Base
  validates_presence_of :title
  validates_presence_of :description

  validates :image_url, allow_blank: false, format: {
    with:    %r{\.(gif|jpg|png)\Z}i,
    message: 'must be a URL for GIF, JPG or PNG image.'
  }

end

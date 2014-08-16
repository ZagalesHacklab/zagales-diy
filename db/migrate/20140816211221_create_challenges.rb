class CreateChallenges < ActiveRecord::Migration
  def change
    create_table :challenges do |t|
      t.string :title
      t.string :image_url
      t.text :description

      t.timestamps
    end
  end

  end

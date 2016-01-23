class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :postal_code
      t.string :city
      t.string :addr
      t.string :tel
      t.float :lat
      t.float :lon
      t.float :point
      t.string :url
      t.string :image_url

      t.timestamps null: false
    end
  end
end

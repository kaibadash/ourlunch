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

      t.timestamps null: false
    end
  end
end

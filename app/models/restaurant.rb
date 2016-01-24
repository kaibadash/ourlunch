class Restaurant < ActiveRecord::Base
  scope :correct_data, -> { where(city: "渋谷区") }
end

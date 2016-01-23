json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :name, :postal_code, :city, :addr, :tel, :lat, :lon, :point, :url, :image_url
  json.url restaurant_url(restaurant, format: :json)
end

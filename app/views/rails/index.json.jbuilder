json.array!(@rails) do |rail|
  json.extract! rail, :id, :g, :model, :restaurant, :name, :postal_code, :city, :addr, :tel, :lat, :lon, :point, :url, :image_url
  json.url rail_url(rail, format: :json)
end

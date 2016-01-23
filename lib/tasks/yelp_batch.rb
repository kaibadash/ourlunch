require 'yelp'

module Tasks
  class YelpBatch
    LOCATION = "渋谷"
    def self.get_all_restaurants
      restaurants = Restaurant.all
      restaurants.each do |rest|
        params = { term: rest.name, limit: 1, category_filter: "food", redius_filter: 200 }
        yelp_result = Yelp.client.search(LOCATION, params).businesses.first
        rest.update_attributes(
          name: yelp_result.name,
          postal_code: get_postal_code(yelp_result),
          city: yelp_result.location.city,
          addr: yelp_result.location.address.reduce { |str, addr| str += addr }
          tel: yelp_result.display_phone,
          lat: yelp_result.location.coordinate.latitude,
          lon: yelp_result.location.coordinate.longitude,
          point: yelp_result.rate,
          url: yelp_result.url,
          image_url: yelp_result.image_url
        )
      end
    end

    private

    def get_postal_code(yelp_result)
      yelp_result.location.display_address.find { |addr| addr =~ /〒\d{3}-\d{4}/ }
      $&
    end
  end
end


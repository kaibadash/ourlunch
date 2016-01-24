# ourlunch

[About environment](doc/environment.md)

# how to deploy to heroku
1. build assets
1. migration => heroku run rake db:migrate
2. create_restaurants => heroku run rails runner Tasks::YelpBatch.create_restaurants
3. get_all_restaurants => heroku run rails runner Tasks::YelpBatch.get_all_restaurants


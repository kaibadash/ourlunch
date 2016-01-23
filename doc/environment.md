# How to make environment
brew install heroku-toolbelt
brew install postgresql
gem install pg -v '0.18.4'

# heroku memo
heroku login
heroku apps:create ourlunch
heroku addons:create heroku-postgresql
git push heroku master
heroku run rake db:migrate
heroku open
heroku logs


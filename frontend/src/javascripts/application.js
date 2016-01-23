var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

console.log("start!");

var Restaurant = React.createClass({
  render: function() {
    return (
        <div className="restaurant">
          <a href="TODO"><img src={this.props.restaurant.image_url} /></a>
          <a href="TODO">{this.props.restaurant.name}</a>
          {this.props.restaurant.point}
          <a href={"https://www.google.co.jp/maps/@" + this.props.restaurant.lat +".@"+ this.props.restaurant.lon}>map</a>
        </div>
    );
  }
});

var RestaurantBox = React.createClass({
  requestRestaurants: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log("request success:", data)
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.requestRestaurants();
  },
  render: function() {
    return (
        <div className="restaurantBox">
          <RestaurantList data={this.state.data} />
        </div>
    );
  }
});

var RestaurantList = React.createClass({
  render: function() {
    var restaurantNodes = this.props.data.map(function(restaurant) {
      return (
          <Restaurant restaurant={restaurant} key={restaurant.id}>
            {restaurant.name}
          </Restaurant>
      );
    });
    return (
        <div className="restaurantList">
          {restaurantNodes}
        </div>
    );
  }
});

ReactDOM.render(
    <RestaurantBox url="/restaurants.json" />,
    document.getElementById('content')
);


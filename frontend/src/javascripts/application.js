var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

console.log("start!");

var Restaurant = React.createClass({
  render: function() {
    return (
        <div className="restaurant">
          <h2 className="restaurantAuthor">
            {this.props.name}
          </h2>
          {this.props.children}
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
          <h1>Restaurants</h1>
          <RestaurantList data={this.state.data} />
        </div>
    );
  }
});

var RestaurantList = React.createClass({
  render: function() {
    var restaurantNodes = this.props.data.map(function(restaurant) {
      return (
          <Restaurant name={restaurant.name} key={restaurant.id}>
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


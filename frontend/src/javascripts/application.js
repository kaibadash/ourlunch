var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

console.log("start!");

var Restaurant = React.createClass({
    render: function () {
        return (
            <div className="restaurant">
                <a onClick={this.handleClick}>
                    <img src={this.props.restaurant.image_url ? this.props.restaurant.image_url : "http://dummyimage.com/100x100/000000/ffffff&text=NO+IMAGE"}/></a>
                <div><a href={this.props.restaurant.url}>{this.props.restaurant.name}</a></div>
                <div>評価:{this.props.restaurant.point} &nbsp;
                    <a href={"https://www.google.co.jp/maps/@" + this.props.restaurant.lat +".@"+ this.props.restaurant.lon}>
                        <i className="fa fa-2x fa-map-marker"></i>
                    </a>
                </div>
            </div>
        );
    },
    handleClick: function () {
        console.log("show map", this.props.restaurant);
        // reactだとこうじゃないよね
        var map = new GMaps({
            el: '#map',
            lat: this.props.restaurant.lat,
            lng: this.props.restaurant.lon
        });
        map.addMarker({
            lat: this.props.restaurant.lat,
            lng: this.props.restaurant.lon,
            title: this.props.restaurant.name,
            infoWindow: {content: this.props.restaurant.name}
        });
        this.setState({selectedRestaurant: this.props.restaurant});
    }
});

var RestaurantBox = React.createClass({
    requestRestaurants: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log("request success:", data)
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function () {
        return {data: []};
    },
    componentDidMount: function () {
        this.requestRestaurants();
    },
    render: function () {
        return (
            <div className="restaurantBox">
                <MapBox />
                <RestaurantList data={this.state.data}/>
            </div>
        );
    }
});

var RestaurantList = React.createClass({
    render: function () {
        var restaurantNodes = this.props.data.map(function (restaurant) {
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

var MapBox = React.createClass({
    getInitialState: function() {
        return { selectedRestaurant: null };
    },
    componentDidMount: function () {
    },
    render: function () {
        var divStyle = {
            display: this.state.selectedRestaurant == null ? "none" : "block"
        };
        return (
            <div id="map"></div>
            // TODO:親から子供にイベントを伝えて再描画することは簡単なのだが…
            //<div id="map" style={divStyle}></div>
        );
    }
});

ReactDOM.render(
    <RestaurantBox url="/restaurants.json"/>,
    document.getElementById('content')
);


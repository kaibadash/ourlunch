var React = require('react');
var ReactDOM = require('react-dom');

console.log("start!");

// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
console.log("start render")
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);


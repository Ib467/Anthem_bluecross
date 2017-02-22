"use strict";
var jQueryUI = require('jquery-ui');
var React = require('react');

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Medicare Enrolement</h1>
				<p>React, React Router, and Flux </p>
			</div>
		);
	}
});

module.exports = Home;
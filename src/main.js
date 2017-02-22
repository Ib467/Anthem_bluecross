$ = jQuery = require('jquery');
var jQueryUI = require('jquery-ui');
var React = require('react');
//var ReactDOM = require('react-dom');
var DemoGraphicInfo = require('./components/dashboard/demoGraphicInfo');
var Header = require('./components/common/header');
var Footer = require('./components/common/footer'); 

(function(win) { 
	"use strict";
	var App = React.createClass({
		render: function() {
			var page;
			switch(this.props.page) {
				case 'dashboard': page = <DemoGraphicInfo/>; break;
				default: page = <DemoGraphicInfo/>; break;
			}
			return (
				<div><Header/>{page}<Footer/></div> 
			);
		}
	});

	function render() {
		var route = window.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	}
	window.addEventListener('hashchange', render);
	render();
})(window);
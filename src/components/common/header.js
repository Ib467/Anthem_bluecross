"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
$ = jQuery = require('jquery');
$.ui = require('jquery-ui');

var Header = React.createClass({
	getInitialState: function() {
		return {url: '../images/Anthem.jpg', title: 'Static Welcome Message', lastVisit: 'Static Last Visited '};
	},

	loadDataFromServer: function(){
		$.ajax({
		  url: '../jsons/header.json',
		  dataType: 'json',
		  cache: false,
		  success: function(data) {
			this.setState({url: data.fields[0].url, title: data.fields[1].description, lastVisit: data.fields[2].description});
		  }.bind(this),
		  error: function(xhr, status, err) {
			console.error(status, err.toString());
		  }.bind(this)
		});
	},
	
	componentDidMount: function() {
		this.loadDataFromServer();
    // });this.serverRequest = $.get('..\jsons\header.json', function(result) {
			// this.setState( {jsonData: result} );
		// }.bind(this));
	},
	
	componentWilUnmount: function() {
		//this.serverRequest.abort();
	},
	
	render: function() {
		
		return (
        <div className="container-fluid">
			<header>
				<div className="row">
					<div className="left col-sm-8 col-md-9">
						<p>
							<img alt="Logo" src={this.state.url} className="img-responsive" />
						</p>
					</div>
					<div className="right welcome col-sm-4 col-md-3">
						<div className="row">
							<div className="left col-sm-10">
								<p className="welcome-text">{this.state.title}</p>
								<p className="e-health">
									<strong>EHEALTH INSURANCE</strong>
								</p>
								<p className="last-visit">{this.state.lastVisit} 03/23/2016 AT 09:38 EST</p>
							</div>
							<div className="right col-sm-2">
								<p>
									<img alt="arrow" src="images/arow_dropdown.png" className="header-arrow" />
								</p>
							</div>
						</div>

					</div>

				</div>
				<div className="clearfix"></div>
				<div className="row subHeader">
					<div className="left col-sm-4">
						<p className="back-text">Back</p>
					</div>
					<div className="caption right col-sm-8">
						<p>Anthem Blue Cross and Blue Shield</p>
					</div>
				</div>
			</header>
		</div> 
		);
	}
});

module.exports = Header;

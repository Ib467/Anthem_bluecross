"use strict";
var jQueryUI = require('jquery-ui');
var React = require('react');
var divStyleNone = { display:'none' };
var divStyleBlock = { display:'block' };
var divStyleInline = { display:'inline' };
var radioChecked = {checked:true};
var rightContent = {
	width:'100%',
	float:'left',
	minHeight:'200px',
	height:'100%',
	backgroundColor:'#F2F2F2',	
	fontSize:'14px',
	border:'5px solid #0079C2',
	borderRadius:'10%',
	padding:'10px',
	fontFamily:'inherit',
	color:'#333333'
}
var labelText = {
	width:'100%',
	float:'left',
	lineHeight:'30px'	
}
var DateInput = React.createClass({
    render: function() {
        return <input type="text" id="datepicker" className="hasDatepicker" />;
    }
});
var data = [
  { planName: "This block holds plan", description: "This block holds description", coverage: "This block holds coverage"}  
];
var RightPanel = React.createClass({
	render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (		
		<div style={labelText}>
			<b>Plan name</b> : <br/>{comment.planName} <br />
			<b>Description</b> : <br/>{comment.description} <br />
			<b>Coverage</b> : <br/>{comment.coverage} <br />
		</div>		
      );
    });
    return (
      <div className="col-sm-12 col-md-2 col-lg-2">
		<div style={rightContent}> 
			{commentNodes}
		</div>
      </div>
    );
  }
});

var DemoGraphicInfo = React.createClass({
	/* handleSelectChange: function(e) {
		this.setState({text: e.target.value});
	  }, */
	render: function () {
		return (
			<div className="container-fluid dashboardContainer">
				<div className="col-sm-12 col-md-10 col-lg-10">
					<div className="row">
						<div className="col-md-11">
							<p className="required-text">All fields are required</p>
							<h4>Demographic Information</h4>
						</div>
					</div>

					<div className="demographicForm row ">
						<div className="col-md-12 col-sm-12">
							<div className="row">
								<div className="col-md-6 col-sm-7">
									<label> Are you an existing member from non-Medicare
										Advantage Plans? </label>
								</div>
								<div className="toggleSwitch col-sm-2 switch">  
									<input type="checkbox" className="cmn-toggle cmn-toggle-round" id="toggle-event" /><label htmlFor="toggle-event"></label>
								</div>
							</div>
						</div>
					</div>
					
					<div id="memberInfo" className="demographicForm row " style={divStyleNone}>
						<div className="col-md-12 col-sm-12">

							<div className="row">
								<div className="formInput col-md-2 col-sm-2">
									<label htmlFor="memberId"> Member ID </label> <input type="text" id="memberId1" className="form-control" />
								</div>
							</div>
						</div>
						<div className="col-md-12 col-sm-12">
							<div className="row enrollment">
								<div className="col-md-12 col-sm-12">
									<h4>Enrollment</h4>
								</div>
							</div>

							<div className="row">
								<div className="formInput col-sm-12 col-md-6">
									<label htmlFor="sel1">Plan Name</label> <select id="sel1" className="selectpicker customArrow customArrow-blue-white-lg form-control">
										<option selected="">Select a plan</option>
										<option>a</option>
										<option>b</option>
										<option>c</option>
									</select>
								</div>
							</div>
							<div className="row footerLinks">
								<div className="linkText col-sm-6">
									<span><a href="#">Help me choose</a></span> <span><a href="#">View our plans</a></span>
								</div>
								<div className="col-sm-6">&nbsp;</div> 
							</div>
						</div>
					</div>
					
					<div id="nonMemberInfo" style={divStyleBlock}>
						<div className="demographicForm row">
							<div className="col-md-7 col-sm-12">
								<div className="row">
									<div className="formInput col-sm-6">
										<label htmlFor="firstName"> First Name </label> <input type="text" id="firstName" className="form-control" />
									</div>
									<div className="formInput col-sm-6">
										<label htmlFor="lastName"> Last Name </label> <input type="text" id="lastName" className="form-control" />
									</div>
									<div className="formInput col-sm-6">
										<label> Gender </label> 
										<fieldset> 

											<div style={divStyleInline} className="checkbox checkbox-success checkbox-circle">
												<input type="radio" checked={radioChecked} value="option2" id="radio8" name="radio4" /><label htmlFor="radio8"> Male </label>
											</div>
											<div style={divStyleInline} className="checkbox checkbox-success checkbox-circle">
												<input type="radio" value="option3" id="radio9" name="radio4" /><label htmlFor="radio9"> Female </label>
											</div>
										</fieldset>

									</div>
									<div className="formInput col-sm-6">
										<label htmlFor="dateOfBirth"> Date Of Birth </label> <DateInput /><img className="ui-datepicker-trigger" src="images/icon_calendar.png" alt="Select date" title="Select date" />
									</div>
									<div className="formInput col-sm-6">
										<label htmlFor="zipCode"> Zip Code (Primary residence) </label> <input type="text" id="zipCode" className="form-control" />
									</div>
									<div className="formInput col-sm-6">
										<label htmlFor="phoneNumber" id="phone"> Phone Number </label> <input type="text" size="3" id="smallField" /> <input type="text" size="3" id="smallField" /> <input type="text" size="5" id="largeField" />
									</div>
									<div className="formInput col-sm-12">
										<label htmlFor="exampleInputEmail1"> Email Address </label> <input type="text" id="exampleInputEmail1" className="form-control" />
									</div>
									<div className="formInput toggleInput col-sm-12">
											<div className="toggleSwitch col-sm-5">
												<label> Do you have Medicaid Coverage? </label>
											</div>
											<div className="toggleSwitch col-sm-2 switch">
												<input type="checkbox" className="cmn-toggle cmn-toggle-round" id="toggle-event-1" /><label htmlFor="toggle-event-1"></label>
											</div>								
									</div>						

									<div className="col-md-12 col-sm-12">
										<div className="row">
											<div className="formInput col-sm-6">
												<label htmlFor="medNumber"> Medicaid Number </label> <input type="text" id="medNumber" className="form-control" />
											</div>
										</div>
									</div>					
									
									<div className="formInput toggleInput col-sm-12">
											<div className="toggleSwitch col-sm-6">
												<label> Do you have End-Stage Renal Disease (ESRD)?</label>
											</div>
											<div className="toggleSwitch col-sm-2 switch">
												<input type="checkbox" className="cmn-toggle cmn-toggle-round" id="toggle-event-2" /><label htmlFor="toggle-event-2"></label>
											</div>								
									</div>						

									<div className="formInput coverage col-sm-5">
										<label htmlFor="exampleInputEmail1" id="coverage"> Coverage
											Begins </label> <select id="month" className="selectpicker customArrow customArrow-blue-white-lg">
											<option selected="">January</option>
											<option>February</option>
											<option>March</option>
										</select> <select id="year" className="selectpicker customArrow customArrow-blue-white-lg">
											<option selected="">2016</option>
											<option>2014</option>
											<option>2015</option>
										</select>
									</div>
								</div>
							</div>
							<div className="col-md-5 col-sm-12">
								<div className="row">
									<div className="formInput col-sm-5">
										<label htmlFor="agentSelect" id="agent"> Agent ID </label> <select id="agentSelect" className="selectpicker customArrow customArrow-blue-white-lg" data-original-title="" title="">
											<option selected="">1234567890</option>

										</select>
									</div>
									<div style={divStyleNone} id="popOverContent">
										<table>
											<tbody><tr>
												<td><b>First Name</b></td>
												<td>Susan</td>
											</tr>
											<tr>
												<td><b>Last Name</b></td>
												<td>Miller</td>
											</tr>
											<tr>
												<td><b>City</b></td>
												<td>Seattle</td>
											</tr>
											<tr>
												<td><b>State</b></td>
												<td>WA</td>
											</tr>

										</tbody></table>
									</div>
								</div>
							</div>
						</div>
						<div className="row enrollment">
							<div className="col-md-11">
								<h4>Enrollment</h4>
							</div>
						</div>
						<div className="demographicForm ">
							<div className="row">
								<div className="formInput col-sm-12 col-md-6">
									<label htmlFor="sel1">Plan Name</label> <select id="sel1" className="selectpicker customArrow customArrow-blue-white-lg form-control">
										<option selected="">Select a plan</option>
										<option>a</option>
										<option>b</option>
										<option>c</option>
									</select>
								</div>
							</div>
							<div className="row footerLinks">
								<div className="linkText col-sm-6">
									<span><a href="#">View our plans</a></span> <span><a href="#">View our plans</a></span>
								</div>
								<div className="col-sm-6">&nbsp;</div>
							</div>

						</div>
					</div>
					
					<div className="form-group">
						<div className="row">
							<div className="col-md-1">
								<a className="enrollBtn btn btn-primary" type="button" href="personal.html">Enroll
									Now</a>
							</div>
						</div>
					</div>
				</div>				
				<RightPanel data={data} />	
			</div> 		
		); 
	}
});

module.exports = DemoGraphicInfo;
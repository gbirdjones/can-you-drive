var React = require('react');
var Backbone = require('backbone');
module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<form onSubmit={this.ageFunc}>
					<div className="home-container">
						<h1>Are you of legal driving age?</h1>
						<h2>Enter your age below</h2>
						<input type="text" placeholder="age" id="age"></input>
					</div>
				</form>
				<div>
					<button onClick={this.ageFunc} id="submit">Submit</button>
				</div>
				<div id="response"></div>
			</div>
			);
	},
	ageFunc: function(e) {
		console.log('Running');
		e.preventDefault();
		var age = document.getElementById('age').value;	
		var resultDiv = document.getElementById('response');
		var result = +age >= 16 ? 'Grats you can drive' : 'Sorry youngun';
		console.log(result, +age);
		resultDiv.innerHTML = result;
	}
});
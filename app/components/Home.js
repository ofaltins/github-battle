var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
	render: function() {
		return (
			<MainContainer>
				<h1>Github Battle</h1>
				<p className="lead"><em>“You know how hard it is to feel like an extreme falcon-headed combat machine when somebody calls you "chicken man"?”</em></p>
				<Link to='/playerOne'>
					<button type='button' className='btn btn-lg btn-success'>Get started</button>
				</Link>
			</MainContainer>
		)
	}
});

module.exports = Home;
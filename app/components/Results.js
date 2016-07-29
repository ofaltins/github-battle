var React = require('react');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function StartOver () {
	return (
		<div className="row text-center">
			<Link to="/playerOne">
				<button type="button" className="btn btn-lg btn-danger">
					Start over
				</button>
			</Link>
		</div>
	)
}

function Results (props) {
	if (props.isLoading === true) {
		return (
			<Loading speed={100} text="One moment" />
		)
	}
	if (props.scores[0] === props.scores[1]) {
		return (
			<MainContainer>
				<h1>It's a tie!</h1>
				<StartOver />
			</MainContainer>
		)
	}
	var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
	var losingIndex = winningIndex === 0 ? 1 : 0;
	return (
		<MainContainer>
			<h1>Results</h1>
			<div className="row">
				<div className="col-sm-8 col-sm-offset-2">
					<UserDetailsWrapper header="Winner">
						<UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
					</UserDetailsWrapper>
					<UserDetailsWrapper header="Loser">
						<UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
					</UserDetailsWrapper>
				</div>
			</div>
			<StartOver />
		</MainContainer>
	)
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
}

module.exports = Results;
var React = require('react');
var PropTypes = React.PropTypes
var Link = require('react-router').Link;
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function ConfirmBattle (props) {
	return props.isLoading === true
		? <Loading speed={800} text="Waiting"/>
		: <MainContainer>
		<h2>Confirm players</h2>
		<div className="row">
			<div className="col-sm-8 col-sm-offset-2">
				<div className="row">
					<UserDetailsWrapper>
						<UserDetails info={props.playersInfo[0]} header="Player One" />
					</UserDetailsWrapper>
					<UserDetailsWrapper>
						<UserDetails info={props.playersInfo[1]} header="Player Two"/>
					</UserDetailsWrapper>
				</div>
			</div>
		</div>
		<div className="row text-center">
			<Link to="/playerOne">
				<button type="button" className="btn btn-danger btn-lg">Reset players</button>
			</Link>
			<button type="button" className="btn btn-success btn-lg" onClick={props.onInitiateBattle}>Initiate battle</button> 
		</div>
		</MainContainer>
}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	onInitiateBattle: PropTypes.func.isRequired

}

module.exports = ConfirmBattle;
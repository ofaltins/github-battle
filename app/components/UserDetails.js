var React = require('react');
var PropTypes = React.PropTypes;

function UserDetails (user) {
	return (
		<div>
			<ul className="list-group">
				{!!user.score && <li className="list-group-item"><h3>Score: {user.score}</h3></li>}
				<li className="list-group-item"><img className="img-rounded img-responsive" src={user.info.avatar_url}/></li>
				{user.info.name && <li className="list-group-item">Name: {user.info.name}</li>}
				<li className="list-group-item">Username: {user.info.login}</li>
				{user.info.location && <li className="list-group-item">Location: {user.info.location}</li>}
				{user.info.company && <li className="list-group-item">Company: {user.info.company}</li>}
				<li className="list-group-item">Followers: {user.info.followers}</li>
				<li className="list-group-item">Following: {user.info.following}</li>
				<li className="list-group-item">Public Repos: {user.info.public_repos}</li>
				{user.info.blog && <li className="list-group-item">Blog: {user.info.blog}</li>}
			</ul>
		</div>
	)
}

UserDetails.PropTypes = {
	score: PropTypes.number,
	info: PropTypes.shape({
		avatar_url: PropTypes.string.isRequired,
		blog: PropTypes.string,
		company: PropTypes.string,
		followers: PropTypes.number.isRequired,
		following: PropTypes.number.isRequired,
		public_repos: PropTypes.number.isRequired,
		blog: PropTypes.string,
		login: PropTypes.string.isRequired,
		name: PropTypes.string,
		location: PropTypes.string
	})
}

module.exports = UserDetails;
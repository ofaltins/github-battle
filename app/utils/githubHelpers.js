var axios = require('axios');

// optional if rate limited
var id = 'client_id';
var sec = 'secret';
var param = '?client_id=' + id + '&client_secret=' + sec;

function getUserInfo (username) {
	return axios.get('https://api.github.com/users/' + username);
}

function getRepos (username) {
	return axios.get('https://api.github.com/users/' + username + '/repos');
}

function getTotalStars (repos) {
	return repos.data.reduce( function(prev, current) {
		return prev += current.stargazers_count
	}, 0)
}

function getPlayersData (player) {
	return getRepos(player.login)
		.then(getTotalStars)
		.then(function(totalStars) {
			return {
				followers: player.followers,
				totalStars: totalStars
			}
			})
}

function calculateScores (players) {
		return [
			players[0].followers * 3 + players[0].totalStars,
			players[1].followers * 3 + players[1].totalStars
		]
}

var helpers = {
	getPlayersInfo: function(players) {
		return axios.all(players.map(function(username) {
			return getUserInfo(username);
		})).then(function(info) {
			return info.map(function(user) {
				return user.data;
			})
		}).catch(function(err) {
			console.warn('Error in getPlayersInfo', err);
		});
	},
	battle: function (players) {
		var PlayerOneData = getPlayersData(players[0]);
		var PlayerTwoData = getPlayersData(players[1]);
		return axios.all([PlayerOneData, PlayerTwoData])
		.then(calculateScores)
		.catch(function(err) { console.warn('err in battle func', err)});
	}	
};

module.exports = helpers;
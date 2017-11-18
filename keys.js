console.log('this is loaded');

var twitter = require('twitter');
var twitterKeys = new twitter ({
  consumer_key: 'SExpUpGnidKqyBJ8DjqGqXsRg',
  consumer_secret: 'UkLdw2htz3XLewzMoe7g1iztcKttaLrSVzDmaqRmKRu3Z4BPi0',
  access_token_key: '382376017-aT1RPj7OrHUkxVgxEnZEe5iXaunIbJxQoq68yGsm',
  access_token_secret: 'lOm0Wfj0k0pgNaDSUbMXMGYk60LALF3ktP0te3LcqcmJS',
});

var spotify = require('node-spotify-api');
var spotifyKeys = new spotify ({
    id: "183c149f910b47de8505c9bd0e8d4628",
    secret: "00e068324acb40048de7877af2d6dc15"
});

module.exports = {
    twitterKeys: twitterKeys,
    spotifyKeys: spotifyKeys
};

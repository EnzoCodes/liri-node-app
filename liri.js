var keys = require("./keys.js");

var request = require("request");
// var twitreq = require("twitter");
var twitterKeys = require("./keys.js").twitterKeys;
// var spotreq = require("node-spotify-api");
// var spotKeys = new spotreq(keys.spotifyKeys);
var spotKeys = require("./keys.js").spotifyKeys;

var fs = require("fs");

// Grabbing keyword to activate correct script in switch.
var arr = process.argv[2];

switch (arr) {
    case "my-tweets":
    console.log("tweet tweet");
    tweets();
    break;

    case "spotify-this-song":
    console.log("Music time!");
    spotify();
    break;

    case "movie-this":
    console.log("Movie time!");
    movie();
    break;

    case "do-what-it-says":
    console.log("Do that thang!");
    doIt();
    break;
}


function tweets(){
    // statuses/show/:id
    //twitter .get()
    twitterKeys.get('favorites/list', function(tweets, res){
        console.log(tweets);
        console.log(res);
    });
}

function spotify(){
//   Artist(s)
//
// The song's name
//
// A preview link of the song from Spotify
//
// The album that the song is from

};

function movie(){

    var movieName = process.argv;
    movieName.splice(0,3)
    movieName = movieName.join("+");

    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function(error, response, body) {
      // If the request is successful (i.e. if the response status code is 200)
      if (!error && response.statusCode === 200) {
        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Released: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Short Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
      }
    });
};

function doIt(){

};

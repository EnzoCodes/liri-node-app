var keys = require("./keys.js");

var request = require("request");
// var twitreq = require("twitter");
// var twitterKeys = require("./keys.js").twitterKeys;
// var spotreq = require("node-spotify-api");
// var spotKeys = new spotreq(keys.spotifyKeys);
// var spotKeys = require("./keys.js").spotifyKeys;

var fs = require("fs");

// Grabbing keyword to activate correct script in switch.
var arr = process.argv[2];

switch (arr) {
    case "tweets":
    console.log("tweet tweet");
    tweets();
    break;

    case "spotify":
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
    // statuses/user_timeline
    keys.twitterKeys.get('statuses/user_timeline', { screen_name: 'enzo_cnop', count: 20 }, function(error, tweets, res){
        console.log(tweets[0].text);
            if (error) {
                console.log(error);
            }
            if (!error) {
                for(i = 0; i < 20; i++){
                    console.log("Tweet " + (i+1)   + ": " + tweets[i].text + "\n");
            }
        }
    })
};

function spotify(){
    console.log("Let's hear it!");
    var input = process.argv;
    var song = input.splice(3).join(" ");
    console.log(song);

    // If nothing is entered...
        if (!song) {
            keys.spotifyKeys.search({ type: 'track', query: 'Toxic', limit: 1 }, function(error, data) {
                //Logging error message.
                if (error) {
                    console.log("Something went wrong!")
                    console.log(error);
                    return
                }
                var sInfo = "\n Song: " + JSON.stringify(data.tracks.items[0].name, null, 2)
                            + "\n Artist: " + JSON.stringify(data.tracks.items[0].artists[0].name, null, 2)
                            + "\n Album: " + JSON.stringify(data.tracks.items[0].album.name, null, 2)
                            + "\n Url: " + JSON.stringify(data.tracks.items[0].external_urls.spotify, null, 2) + "\n";
                console.log(sInfo);
            });
        } else {
            keys.spotifyKeys.search({ type: 'track', query: song, limit: 1 }, function(error, data) {
                // //Logging error message.
                if (error) {
                    console.log("Something went wrong!")
                    console.log(error);
                    return
                }

                var sInfo = "\n Song: " + JSON.stringify(data.tracks.items[0].name, null, 2)
                            + "\n Artist: " + JSON.stringify(data.tracks.items[0].artists[0].name, null, 2)
                            + "\n Album: " + JSON.stringify(data.tracks.items[0].album.name, null, 2)
                            + "\n Url: " + JSON.stringify(data.tracks.items[0].external_urls.spotify, null, 2) + "\n";

                console.log(sInfo);
                // fs.append()
            });
        }
}; //End Spotify stuff

// https.get(dir, function (response){
//   var str = '';
//   response.setEncoding('utf8');
//   response.on('data', function (data){
//     str += data;
//   });
//   response.on('end', function (){
//     var jObj = JSON.parse(str);
//     console.log(jObj);
//   });
// })



function movie(){

    if(process.argv[3] === undefined) {
        movieName = "Mr. Nobody";
    } else {
        var input = process.argv;
        var movieName = input.splice(3).join(" ");
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function(error, response, body) {
      // If the request is successful (i.e. if the response status code is 200)
      if (!error && response.statusCode === 200) {
        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        console.log("\n Title: " + JSON.parse(body).Title);
        console.log("Released: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Short Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors + "\n");
      }
    });
};

function doIt(){
    console.log("This feature is under development...sorry mate.");
//     fs.readFile("searchData.txt", "utf8," function(error, data){
//         if (error) {
//             console.log("Something went wrong!");
//             return console.log(error);
//         }
//
//         console.log(data);
//         var dataSplit = data.split("\" ");
//         //Doesnt work with spotify ?
//
//     });
//
};

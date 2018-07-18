var request = require("request")

var fs = require("fs")
//this is a constructor which we are passing out
var TV = function () {
    console.log("success tv")
    this.findShow = function (show) {
        // The following URL can be used to search the TV Maze API for a given show
        var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
        request(URL, function (error, response, body) {

            if (!error && response.statusCode === 200) {



                var parsedBody = JSON.parse(body)
                var divider = "###############################################################################"
                var showData = [
                    "\n" + "Show: " + parsedBody.name,
                    "Genres: " + parsedBody.genre,
                    "Rating: " +  parsedBody.rating.average,
                    "Summary: " + parsedBody.summary
                ].join("\n")

                fs.appendFile('log.txt', showData +"\n"+ divider, (err) => {
                    if (err) throw err;
                    console.log('The "data to append" was appended to file!');
                  });



            };
        });
    }
}

  module.exports = TV;
  
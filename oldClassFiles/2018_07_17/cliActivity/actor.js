var request = require("request")

var fs = require("fs")
//this is a constructor which we are passing out
var ActorObject = function () {

    this.findActor = function (person) {
        
        
        // The following URL can be used to search the TV Maze API for a given show
        var URL = "http://api.tvmaze.com/search/people?q=" + person;
        
        request(URL, function (error, response, body) {
                 
               

            //
            if (!error && response.statusCode === 200) {

                var divider = "###############################################################################"
                var parsedBody = JSON.parse(body)
                
                var showData = [
                    "\n" + "Name: " + parsedBody[0].person.name,
                    "Birthday: " + parsedBody[0].person.birthday,
                    "Country: " +  parsedBody[0].person.country.name,
                    "Gender: " + parsedBody[0].person.gender,
                    "URL: " + parsedBody[0].person.url

                ].join("\n")
                // The actor’s name
                // The actor’s birthday
                // The actor’s gender
                // The actor’s country
                // The actor’s TV Maze URL
                // Once the data has been saved to the log.txt file, print it to the console.

                fs.appendFile('log.txt', showData +"\n" + divider, (err) => {
                    if (err) throw err;
                    console.log('The "data to append" was appended to file!');
                  });



            };
        });
    }
}

  module.exports = ActorObject;
  
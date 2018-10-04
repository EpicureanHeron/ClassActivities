var cheerio = require("cheerio");
var request = require("request");

// First, tell the console what server3.js is doing
console.log("\n******************************************\n" +
            "Look at the image of every award winner in \n" +
            "one of the pages of `awwwards.com`. Then,\n" +
            "grab the image's source URL." +
            "\n******************************************\n");

// Make request to grab the HTML from `awwards's` clean website section
request("https://www.npr.org/sections/news/", function(error, response, html) {

  // Load the HTML into cheerio
  var $ = cheerio.load(html);

  // Make an empty array for saving our scraped info
  var results = [];

  

  // With cheerio, look at each award-winning site, enclosed in "figure" tags with the class name "site"
  $(".item-info").each(function(i, element) {
    
    /* Cheerio's find method will "find" the first matching child element in a parent.
     *    We start at the current element, then "find" its first child a-tag.
     *    Then, we "find" the lone child img-tag in that a-tag.
     *    Then, .attr grabs the imgs srcset value.
     *    The srcset value is used instead of src in this case because of how they're displaying the images
     *    Visit the website and inspect the DOM if there's any confusion
    */
    // var imgLink = $(element).attr("src");

    // var title = $(element).attr("alt")
    // var link = $(element).attr("title")
    var title = $(element).find("h2").text()
    var link = $(element).find("h2").find("a").attr("href")
    var teaser = $(element).find(".teaser").text()

    // console.log(link)
    // // Push the image's URL (saved to the imgLink var) into the results array
     results.push({titleInfo: title, linkInfo: link, teaserInfo: teaser});
  });

  // After looping through each element found, log the results to the console


});

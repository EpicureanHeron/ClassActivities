
   
      var animal = "Libya"
      var queryURL = "https://developer.nytimes.com/article_search_v2.json?" + animal + "api-key=41d36c380c8049df915079ce5452390alimit=";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.
        console.log(response)

      });

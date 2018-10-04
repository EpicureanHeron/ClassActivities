import axios from "axios";
require("dotenv").config();
var key = require("../keys.js");
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = key.nyt.id

export default {
  search: function() {
    console.log(BASEURL)
    return axios.get(BASEURL);
  }
};

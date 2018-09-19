import axios from "axios";
const BASEURL = "https://dog.ceo/api/breeds/image/random/1";


export default {
  search: function() {
    console.log(BASEURL)
    return axios.get(BASEURL);
  }
};

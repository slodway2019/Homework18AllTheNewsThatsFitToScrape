var axios = require("axios");
var cheerio = require("cheerio");


var scrape = function() {
    
    return axios.get("http://www.nytimes.com").then(function(res) {
      var $ = cheerio.load(res.data);
      console.log("scraping");
      
      var articles = [];

      
  
      return articles;
    });
  };



module.exports = scrape;
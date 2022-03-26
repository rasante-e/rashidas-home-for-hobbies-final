
/*
var fs = require('fs');

var data = {}
data.table = []
for (i=0; i <26 ; i++){
   var obj = {
       id: i,
       square: i * i
   }
   data.table.push(obj)
}
fs.writeFile ("input.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);

*/
'use strict';
const snoowrap = require('snoowrap');

var request = require("request");
var options = {
    "method": "GET",
    "url" : "https://imdb-api.com/en/API/SearchKeyword/k_qm41xbwq/truecrime",
    "headers": {
    }
};
request(options, function (error, response) {
    if(error) throw new Error(error);
    console.log(response.body);
}

);
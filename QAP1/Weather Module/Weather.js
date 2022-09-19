// A weather fetching program thats uses (weather.service.msn.com) API for stats.

var weather = require('weather-js');
 
weather.find({search: 'makinsons, NL', degreeType: 'C'}, function(err, result) {
    // The ".find()" method returns a value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
  if(err) console.log(err);

//   Output:
  console.log(JSON.stringify(result, null, 2));
//   The JSON.stringify method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.
});

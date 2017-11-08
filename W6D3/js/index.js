console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
  type: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b',
  success(data) {
    console.log("Here is the weather data");
    console.log(data);
  },
  error() {
    console.log("An error occurred");
  }
})
// Add another console log here, outside your AJAX request
console.log("Here is another log");

/***
When does the request get sent? Request gets sent after the first console log 
When does the response come back? When the server calls the success or error callbacks 
What's the current weather in New York? oord: {…}, weather: Array(2), base: "stations", main: ....
Did the page refresh? No
How could we use different HTTP methods in our request? Replace the type and add a data section in the .ajax object
***/
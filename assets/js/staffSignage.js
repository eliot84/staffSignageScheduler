console.log("staffSignage.js is online");

//  https://docs.google.com/spreadsheets/d/1rf3Ni0TRr6paXqN-kX33L292RhX1vTPBbw4diIOL6EY/edit#gid=0

//    1rf3Ni0TRr6paXqN-kX33L292RhX1vTPBbw4diIOL6EY

//example google sheet get: "https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values/Sheet1!A1:D5";

console.log(moment().format('MMMM Do YYYY, h:mm:ss a') );

const Http = new XMLHttpRequest();
const url = "https://sheets.googleapis.com/v4/spreadsheets/1rf3Ni0TRr6paXqN-kX33L292RhX1vTPBbw4diIOL6EY?ranges=Sheet1&key={302308272083-ve340842p2h65jhmosgm2qatigsu2rsi.apps.googleusercontent.com}";
Http.open("GET", url);
Http.send();

Http.onreadystatechange=(e)=>{
	console.log(Http.responseText)
}



console.log("staffSignage.js is online");

//  https://docs.google.com/spreadsheets/d/1rf3Ni0TRr6paXqN-kX33L292RhX1vTPBbw4diIOL6EY/edit#gid=0

//    1rf3Ni0TRr6paXqN-kX33L292RhX1vTPBbw4diIOL6EY

//example google sheet get: "https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values/Sheet1!A1:D5";

const Http = new XMLHttpRequest();
const url = "https://sheets.googleapis.com/v4/spreadsheets/1rf3Ni0TRr6paXqN-kX33L292RhX1vTPBbw4diIOL6EY/values/Sheet1!A1:D5?key=AIzaSyApWcCYigYzktDJE3WY5JImjthvjN3X5jA";
Http.open("GET", url);
Http.send();

Http.onreadystatechange=(e)=>{
	console.log(Http.responseText)
}



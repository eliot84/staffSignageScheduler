console.log("staffSignage.js is online");

//  https://docs.google.com/spreadsheets/d/1rf3Ni0TRr6paXqN-kX33L292RhX1vTPBbw4diIOL6EY/edit#gid=0

//    1rf3Ni0TRr6paXqN-kX33L292RhX1vTPBbw4diIOL6EY

//example google sheet get: "https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values/Sheet1!A1:D5";

const clock = document.getElementById('clock');

function updateTime(){
	const now = moment();
	const humanReadable = now.format('dddd') + ' ' + now.format('MMMM Do YYYY, h:mm:ss a');

	clock.textContent = humanReadable;
}

setInterval(updateTime, 1000);


const Http = new XMLHttpRequest();
const url = "https://sheets.googleapis.com/v4/spreadsheets/1GnI7OZ-uzE4qzCQh8zsHNFi9yA9z6_z7KMUg14yZHYg?ranges=Sheet1&fields=sheets%2Fdata%2FrowData%2CspreadsheetUrl&key={AIzaSyAQQWeauYhpITuv3oyMfBenmj27TI7OOtA}";
Http.open("GET", url);
Http.send();

Http.onreadystatechange=(e)=>{
	console.log(Http.responseText)
}



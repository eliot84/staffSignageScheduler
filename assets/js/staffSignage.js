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

/*
const Http = new XMLHttpRequest();
const url = "https://sheets.googleapis.com/v4/spreadsheets/1rf3Ni0TRr6paXqN-kX33L292RhX1vTPBbw4diIOL6EY?ranges=Sheet1&key={302308272083-ve340842p2h65jhmosgm2qatigsu2rsi.apps.googleusercontent.com}";
Http.open("GET", url);
Http.send();

Http.onreadystatechange=(e)=>{
	console.log(Http.responseText)
}

*/

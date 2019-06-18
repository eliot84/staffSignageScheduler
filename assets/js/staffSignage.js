console.log("staffSignage.js is online");

const clock = document.getElementById('clock');

function updateTime(){
	const now = moment();
	const humanReadable = now.format('dddd') + ' ' + now.format('MMMM Do YYYY, h:mm:ss a');

	clock.textContent = humanReadable;
}

setInterval(updateTime, 1000);


const Http = new XMLHttpRequest();
const url = "https://sheets.googleapis.com/v4/spreadsheets/1GnI7OZ-uzE4qzCQh8zsHNFi9yA9z6_z7KMUg14yZHYg?ranges=Sheet1&fields=sheets%2Fdata%2FrowData%2CspreadsheetUrl&key=AIzaSyAQQWeauYhpITuv3oyMfBenmj27TI7OOtA";
Http.open("GET", url);
Http.send();                                                                                                                                                                                                                      

Http.onreadystatechange=(e)=>{
	console.log(Http.responseText)
}



console.log("staffSignage.js is online");

const clock = document.getElementById('clock');
var result;

function updateTime(){
	const now = moment();
	const humanReadable = now.format('dddd') + ' ' + now.format('MMMM Do YYYY, h:mm:ss a');

	clock.textContent = humanReadable;
}

setInterval(updateTime, 1000);


const Http = new XMLHttpRequest();
const url = "https://sheets.googleapis.com/v4/spreadsheets/1GnI7OZ-uzE4qzCQh8zsHNFi9yA9z6_z7KMUg14yZHYg/values/A1%3AB12?valueRenderOption=FORMATTED_VALUE&key=AIzaSyAQQWeauYhpITuv3oyMfBenmj27TI7OOtA"
;

Http.open("GET", url);
Http.send();                                                                                                                                                                                                                      

Http.onreadystatechange=(e)=>{
	result = JSON.parse(Http.responseText);
	populate(result);

}


function populate(result){
	var staff = result.values;
	var findList = document.getElementById('list');

	for(i = 1; i < staff.length; i++){
		var addThis = '<div class="card"><a class="portLinks" href="portfolio/BTTFHangman.html"><div class="cardPhoto a"></div><h1>' + staff[i][0] + '</h1> <p>Service Desk Technician</p></a> </div>';

		findList.insertAdjacentHTML("beforeend", addThis);
	}		
}



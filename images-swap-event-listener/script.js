let counter = 1; 
let speed = 2000;
let interval = setInterval(imageSwap, speed);

// eventlistener
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('play').addEventListener('click', play);
document.getElementById('speedup').addEventListener('click', speedup);
document.getElementById('slowdown').addEventListener('click', slowdown);

// function imageSwap
function stop(){
	clearInterval(interval);
	counter = 0;	
	console.log("stop");
	document.getElementById('stop').disabled = true;
	document.getElementById('pause').disabled = true;
	document.getElementById('speedup').disabled = true;
	document.getElementById('slowdown').disabled = true;
}; 
		
function pause(){
	clearInterval(interval);
	console.log("pause");
	document.getElementById('stop').disabled = true;
	document.getElementById('pause').disabled = true;
	document.getElementById('speedup').disabled = true;
	document.getElementById('slowdown').disabled = true;
}; 
		
function play(){
	// reset speed at 3000 milliseconds (3s)
	speed = 3000;
	interval = setInterval(imageSwap, speed);
	console.log(speed);
	console.log("play");
	document.getElementById('stop').disabled = false;
	document.getElementById('pause').disabled = false;
	document.getElementById('speedup').disabled = false;
	document.getElementById('slowdown').disabled = false;
}; 

function speedup(){
	if (speed == 2000){
		console.log("no no no slow down juan");
		document.getElementById('speedup').disabled = true;
	} else {
		clearInterval(interval);
		speed = speed - 1000;
		interval = setInterval(imageSwap, speed);
		console.log(speed);
		console.log("speed up");
		document.getElementById('slowdown').disabled = false;
	} 
}; 

function slowdown(){
	if (speed == 5000){
		console.log("speed up juan");
		document.getElementById('slowdown').disabled = true;
	} else {
		clearInterval(interval);
		speed = speed + 1000;
		interval = setInterval(imageSwap, speed);
		console.log(speed);
		console.log("slow down");
		document.getElementById('speedup').disabled = false;
	} 
}; 
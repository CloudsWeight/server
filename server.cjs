
const express = require('express');
const path = require('path');
const app = express();
const PORT = 43451;
const { spawn } = require('child_process');
//area 🛸 lab 
app.listen(PORT, (error) => 
{
	if(!error)
		console.log('Server Listenining on: ', PORT)
	else
		console.log("Error Found in Application: ", error)
});
app.use("/www", express.static(__dirname + "/www"));
app.use("/www/css", express.static(__dirname + "/www/css"));
app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, '/www/index.html'));
});	
app.get('/favicon.ico', (req,res) => {
	res.sendFile(path.join(__dirname, '/www/img/favicon.ico'));
});
/*var express = require("express");
var app = express();*/

/*app.get("/", function(req, res){
	res.send("Hello world");
});

app.listen(3000, function(){
	console.log("Example is running on port 3000");
});*/

/*app.get("/", function(req, res){
	res.send("<h1>Hello world</h1>");
});

app.get("/name/:name", function(req, res){
	var name = req.params.name;
	res.send("<h1>Hello" + name + "</h1>");
});

app.listen(3000, function(){
	console.log("Example is running on port 3000");
});*/

/*app.get("/google/search/:search", function(req, res){
	var search = req.params.search;
	res.redirect('http://google.com/search?q={' + search + '}');
});

app.get("/name/:name", function(req, res){
	var name = req.params.name || "friend";
	res.send("<h1>Hello " + name + "</h1>");
});*/

/*app.use(express.static("Lesson 2"));

app.get("/", function(req, res){
   res.redirect("index.html");
});*/

/*function main(){
	var file = "hello.txt";
	fs.appendFileSync(file, "Hello world\n");
}*/

var fs = require('fs');
var dummyText = 'Apple yep';

function main(){
	fs.writeFileSync("dummytext.txt", dummyText);
	var text = fs.readFileSync("dummytext.txt").toString();
	console.log(dummyText == text);
	console.log(text);
	fs.writeFileSync("undummytext.txt",
		text.replace("Apple", "Microsoft")
	);
}

main();

/*app.listen(3000, function(){
   console.log("Example is running on port 3000");
});*/
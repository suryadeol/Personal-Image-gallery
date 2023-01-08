var express=require('express');
var app=express();
const mongoose=require('mongoose');
const bodyParser=require("body-parser");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb://127.0.0.1:27017/AIDS", { useNewUrlParser: true},{useUnifiedTopology: true});

const nodes={
	name:String,
	phone:Number,
	email:String,
	Gender:String,
	Reason:String
}

const image=mongoose.model("image",nodes);
app.get('/',function (request,res){
	res.sendFile(__dirname +"/logi.html" ); 
})

app.post("/",function(req,res){

	let newob = new image({
	
		name:req.body.name,
		phone:req.body.num,
		email:req.body.email,
		Gender:req.body.gen,
		Reason:req.body.data,

	});
	newob.save();
	res.sendFile(__dirname +"/home.html" ); 
	
})
var server=app.listen(8000,function(){
	console.log("listening");
});
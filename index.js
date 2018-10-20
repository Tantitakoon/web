var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo_db = require('./mongo_db');
var multer  =   require('multer');
var fs = require('fs');

app.use(express.static(__dirname + '/web/'));
app.use(bodyParser.urlencoded({
    extended: false
}))
app.set('views', __dirname + '/web/public/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.json());

var storage =   multer.diskStorage({
    
    destination: function (req, file, callback) {
       callback(null, __dirname+'\\uploads');
    },
    filename: function (req, file, callback) {
      callback(null, Date.now()+".jpg");
    }
  });
 var upload = multer({ storage : storage }).array('userPhoto',10);




//var database =  new mongo_db();
//database.create_Database();
app.get('/',function(req,res){
    
   res.sendfile(__dirname+"/web/public/index.html");
});
app.get('/admin',function(req,res){
    res.sendfile(__dirname+"/web/public/admin.html");
});
app.post('/insert',function(req,res){
    upload(req,res,function(err) {
        //database.insertData(req.body,req.files);
        //console.log(req.body);
        //console.log(req.files);
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});
app.get('/test',function(req,res){
    res.sendFile(__dirname+"/web/public/test.html");
});



app.listen(process.env.PORT || 8000, function(req,res){
    console.log("server start");
}) ;
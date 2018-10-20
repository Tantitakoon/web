var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var MongoClient = require('mongodb').MongoClient;



var mongo_db = function () {
   
    function mongo_db() {
        this.url = "mongodb://localhost:27017/";
        this.create_Database = this.create_Database.bind(this);
        this.insertData = this.insertData.bind(this);         
        this.messengerView = this.messengerView.bind(this);
        this.listen = this.listen.bind(this);
        this.setView = this.setView.bind(this);
    }
  
    _createClass(mongo_db, [{
        key: 'create_Database',
        value: function create_Database() {
      
           
            MongoClient.connect(this.url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("mydb");
                dbo.createCollection("product", function(err, res) {
                  if (err) throw err;
                  console.log("Collection created!");
                  db.close();
                });
              });
          
        }
    },  {
        key: 'insertData',
        value: function insertData(objData,objImg) {
            MongoClient.connect(this.url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("mydb");
                var imgs = [];
                for(let i of objImg){
                    imgs.push(i.path);
                }
                var myobj = { brand:objData.selectBrand,model:objData.selectModel,price:objData.price,year:objData.year,img:imgs};
                dbo.collection("product").insertOne(myobj, function(err, res) {
                  if (err) throw err;
                  console.log("1 document inserted");
                  db.close();
                });
              });

        
       
        }
    }, {
        key: 'messengerView',
        value: function messengerView() {
          
        
        }
    },{
        key: 'setView',
        value: function setView() {
         
        }
    },{
        key: 'listen',
        value: function listen() {
         
        }
    }, {
        key: 'cancle',
        value: function cancle() {}
    }]);

    return mongo_db;
}();

module.exports= mongo_db;

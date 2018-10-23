const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const fs = require('fs');
const app = express();

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index')
})
app.get('/login', function (req, res) {
    res.render('login')
})
app.get('/registration', function (req, res) {
    res.render('registration')
})

app.post('/registration', urlencodedParser, function (req, res) {
    const saltRounds = 10000
    bcrypt.genSalt(saltRounds, function (err, getsalt) {
        bcrypt.hash(req.body.password, getsalt, function (err, gethash) {
            salt = getsalt
            hash = gethash
            const json = {
                email: req.body.email,
                salt: salt,
                hash: hash,
                iterations: saltRounds,
            }
            const jsonString = JSON.stringify(json)
            fs.writeFile('myuser.json', jsonString, 'utf8', function () {
                res.send('okkkk : ' + req.body.email + ', ' + req.body.password + ' Salt : ' + salt + ' Hash : ' + hash)
            });
        })
    })
})


app.post('/login', urlencodedParser, function (req, res) {
    let obj = {} //สร้าง object เปล่าๆรอ
    fs.readFile('myuser.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data)
            if (obj.email == req.body.email) { // check ว่า email ที่ผู้ใช้กรอกมาใหม่ ตรงกับที่เราเก็บข้อมูลไว้หรือไม่ดดด
                bcrypt.compare(req.body.password, obj.hash, function (err, result) {
                    if (result) {
                        //ถ้า result == true รหัสผ่านตรง
                        res.send('ยินดีด้วยคุณลงชื่อเข้าใช้งานได้แล้ว')
                        //TODO: เก็บข้อมูลผู้ใช้ไว้บน session
                    }
                    else {
                        //ถ้า result == false รหัสผ่านไม่ตรง
                        res.send('รหัสผ่านไม่ถูกต้อง')
                    }
                })
            }
            else{
                res.send('เราไม่พบ Email ของคุณ')
            }
        }
    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
const express = require('express')
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: "",
    database: "dikanda"
});

app.post('/register', (req, res) => {
    const name = req.body.name;
    const companyname = req.body.companyname;
    const email = req.body.email;

    db.query('INSERT INTO dikandauser (name, companyname, email) VALUES (?,?,?)',
    [name, companyname, email], (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("USER REGISTERED SUCCESSFULLY");
        }
    });
})
app.listen(3002, () => {
    console.log("Listening on PORT 3002");
})
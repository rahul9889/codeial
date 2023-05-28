const db = require('mongoose');


// connect to db
db.connect('mongodb://0.0.0.0:27017/UserInfo');

const con = db.connection;

con.on('error',console.error.bind(console,'error in connecting to the db'))


con.once('open',()=>{
    console.log('connected');
})

module.exports = con;
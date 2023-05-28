const user = require('../modals/user');

module.exports.home=function(req,res){
return res.render('home',{title:'signUp'})
}

module.exports.create = function(req,res){
    console.log(req.body);

    // user.create({email:req.body.email,password:req.body.password,name:req.body.name});

    user.create(req.body);

    return res.render('users');



    
    
    
}



// module.exports.user = function(req,res){
//     return res.end('<h1>Rahulll</h1>')
// }
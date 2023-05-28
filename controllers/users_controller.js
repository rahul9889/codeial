module.exports.user = function(req,res){
    // res.end('<h1>user profilr</h1>')
    return res.render('users',{
        title:"home"
    });
}
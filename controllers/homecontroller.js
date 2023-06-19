const model = require('../stores/model');
// const model = require('../stores/model');


exports.homePage = ((req,res)=>{
    res.send("my name is danish");
});

exports.homePost = ((req,res)=>{
    console.log(req.body);
});
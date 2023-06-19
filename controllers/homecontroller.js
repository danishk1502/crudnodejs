const mongoModel = require('../stores/model');


exports.homePage = ((req, res) => {
    res.send("my name is danish");
});

exports.homePost = ((req, res) => {
    const data = new mongoModel({
        name: req.body.name,
        age: req.body.age,
        year: req.body.year,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy
    })
    data.save();
});

exports.homePatch = ((req, res) => {
    mongoModel.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: {
            name: req.body.name,
            age: req.body.age,
            year: req.body.year,
            updatedBy: req.body.updatedBy
        }
    }
    ).then((result) => {
        console.log(result);
    })
});

exports.homeDelete = ((req, res) => {
    mongoModel.findOneAndRemove({ _id: req.params.id })
        .then((result) => {
            console.log(result);
        })
})

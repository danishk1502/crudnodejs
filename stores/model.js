const mongoose = require("mongoose");

const mongoConnec = mongoose.connect("mongodb://127.0.0.1:27017/studentData", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongodb connected");
}).catch(() => {
    console.log("error occured mongodb");
});

const today = new Date()

const schema = mongoose.Schema({
    name : {type:String},
    age : {type:Number},
    year : {type:Number},
    updatedBy : {type: String},
    createdBy : {type:String}
}, { timestamps: true });


module.exports = mongoose.model("stuCollec", schema);
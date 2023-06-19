const mongoose = require("mongoose");



const mongoConnec = mongoose.connect("mongodb://127.0.0.1:27017/studentData", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(() => {
    console.log("mongodb connected");
}).catch(() => {
    console.log("error occured mongodb");
});

const Schema = {
    name : {type:String},
    age : {type:Number},
    year : {type : Number}
};

const mongoModel = mongoose.model("stuCollec", Schema);

module.export = mongoModel;
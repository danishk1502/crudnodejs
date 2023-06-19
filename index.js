const express = require('express');
const app = express();
const port = 5598;
const routes = require('./routes/homerouter');


app.use(express.json());
app.use("/", routes);


app.listen(port, ()=>{
    console.log("Port listen at : "+ port);
})


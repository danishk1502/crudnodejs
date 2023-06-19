const express = require('express');
const routes = express.Router();
const home = require('../controllers/homecontroller')


routes.get("/", home.homePage)
routes.post("/", home.homePost);

module.exports = routes;

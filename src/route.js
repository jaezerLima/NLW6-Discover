const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req,res) => res.render("index",{page: 'enter_room'}))
route.get('/create_pass',(req,res) => res.render("index", {page: 'create_pass'}))

route.get('/room/:room',(req,res) => res.render("room"))

route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create_room', RoomController.create)


module.exports = route
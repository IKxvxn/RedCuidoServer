require('dotenv').config()
const app = require('express')()
const http = require('http').Server(app)
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const homeRoute = require('./routes/homeRoute')
const authRoute = require('./routes/authRoute')
const zip = require('express-easy-zip');



app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(fileUpload());
app.use(zip());
app.set('port', process.env.PORT|| 8079)

mongoose.connect("mongodb://RedAdm:RedAdm@cluster0-shard-00-00-6qbpx.mongodb.net:27017,cluster0-shard-00-01-6qbpx.mongodb.net:27017,cluster0-shard-00-02-6qbpx.mongodb.net:27017/RedCuido?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true")

app.use('/home', homeRoute)
app.use('/auth', authRoute)

app.listen(process.env.PORT || 8079, function() {
  console.log("App is running on port " + app.get('port'));
});






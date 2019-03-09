var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

const mongoURI = 'mongodb://admin:admin1@cluster0-shard-00-00-4qhti.mongodb.net:27017,cluster0-shard-00-01-4qhti.mongodb.net:27017,cluster0-shard-00-02-4qhti.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'

mongoose
    .connect(mongoURI, { useNewUrlParser: true})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log (err))

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})
// Dependecies
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router;
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));

// Setup server
var appPort = 8080;
var appHost = '0.0.0.0';
var databaseName = 'booking';
var dbUri = 'mongodb://' + appHost + '/' + databaseName;

// Project folder to serve client files
app.use(express.static(path.join(__dirname, '')));

// Configure server to send the index.html page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});

// Database mongoose models
var Room = require('./database/roomModel');

// Set server routes
var roomsRouter = express.Router();
roomsRouter.get('/', function (req, res) {
    Room
        .find({})
        .exec(function (err, result) {
            if (err) {
                return res.sendStatus(500);
            }
            return res.send(result);
        });
});
roomsRouter.post('/', function (req, res) {
    var model = req.body;
    console.log("Room model ->", model);
    var newItem = new Room(model);
    newItem.save(function (err, created) {
        if (!!err) {
            return res.sendStatus(500);
        }
        return res.status(200).send(created);
    });
});
roomsRouter.get('/:id', function (req, res) {
    var id = req.params.id;
    Room
        .findById(id)
        .exec(function (err, item) {
            if (err) {
                return res.sendStatus(500);
            }
            return res.status(200).send(item);
        });
});
roomsRouter.put('/:id', function (req, res) {
    var id = req.params.id;
    var model = req.body;
    Room.findByIdAndUpdate(id, model).exec(function (err, updated) {
        if (err) {
            return res.sendStatus(500);
        }
        return res.status(200).send(updated);
    });
});
roomsRouter.delete('/:id', function (req, res) {
    var id = req.params.id;
    Room.findByIdAndRemove(id).exec(function (err, removed) {
        if (err) {
            return res.sendStatus(500);
        }
        return res.status(200).send(removed);
    });
});

app.use('/api/rooms', roomsRouter);

// Connect to db then start the server
mongoose.connect(dbUri, {}, function (err) {
    // Error
    if (err) {
        console.error('Could not connect to MongoDB!');
        console.log(err);
    } else {
        // Enabling mongoose debug mode if required
        mongoose.set('debug', true);

        // Start server
        app.listen(appPort, appHost, function () {
            var server = 'http://' + appHost + ':' + appPort;
            console.log('Server started: ', server);
        });

    }
});



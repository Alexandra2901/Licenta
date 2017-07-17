'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Schema
 */
var RoomSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    bath: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

/**
 * Register
 */
module.exports = mongoose.model('Room', RoomSchema);

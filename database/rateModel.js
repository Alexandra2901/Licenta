'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Schema
 */
var RateSchema = new Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    weekdaysPrice: {
        type: String
    },
    weekendPrice: {
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
module.exports = mongoose.model('Rate', RateSchema);

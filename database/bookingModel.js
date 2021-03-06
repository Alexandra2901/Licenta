'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Schema
 */
var BookingSchema = new Schema({
    checkin: {
        type: Date
    },
    checkout: {
        type: Date
    },
    rooms: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room'
    }],
    name: {
        type: String
    },
    phone: {
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
module.exports = mongoose.model('Booking', BookingSchema);

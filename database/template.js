'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Schema
 */
var ActivitySchema = new Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }, // Referinta la alta entitate
    log: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

/**
 * Register
 */
module.exports = mongoose.model('Activity', ActivitySchema);

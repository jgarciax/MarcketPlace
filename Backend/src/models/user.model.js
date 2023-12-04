'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    rol: {
        type: String,
        enum: ['VISITANTE', 'CLIENTE', 'ADMINISTADOR'],
        require: true
    },
    name: {
        require: true,
        type: String
    },
    phoneNumber: {
        require: true,
        type: Number
    },
    email: {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String
    },
    publication: [{
        type: Schema.Types.ObjectId,
        require: true,
        ref: "offer"
    }],
    Shopping_history: [{
        type: Schema.Types.ObjectId,
        ref: 'offer',
        required: true
    }],
    sales_history: [{
        type: Schema.Types.ObjectId,
        ref: 'offer',
        require: true
    }]

    
})

module.exports = mongoose.model = ('UserSchema', UserSchema);
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    seller: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'user'
    }, 
    buyer: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'user'
    },
    model: {
        type: String,
        require: true
    },
    marca: {
        type: String,
        require: true
    },
    estate:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: date,default:Date.now
    }
})
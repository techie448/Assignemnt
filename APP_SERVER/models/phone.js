const mongoose = require('mongoose');

let accessorySchema = new mongoose.Schema({
    box: {type: Boolean},
    charger: {type: Boolean},
    earphone: {type: Boolean}
});

let phoneSchema = new mongoose.Schema({

    brand: {type: String, required: true},
    model: {type: String, required: true},
    color: {type: String, required: true},
    cost: {type: Number, required: true, maxValue: 3000},
    warranty: {type: Number, maxValue: 3},
    accessory: accessorySchema
});

mongoose.model('phone', phoneSchema);
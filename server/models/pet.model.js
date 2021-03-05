const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Pet name required"],
        minlength: [3, "Name must be at least 3 characters"],
    },

    type: {
        type: String,
        required: [true, "Pet type required!"],
        minlength: [3, "Pet type must be at least 3 characters"]
    },

    description: {
        type: String,
        required: [true, "Description required!"],
        minlength: [3, "Description must be atleast 3 characters!"]
    },

    skill1: {
        type: String,
    },

    skill2: {
        type: String,
    },

    skill3: {
        type: String,
    },


}, {timestamps:true});


const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;
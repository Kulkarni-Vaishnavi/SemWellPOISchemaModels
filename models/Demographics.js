const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const DemographicsSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    
    age : {
        type : Number,
        required : true
    },

    gender: {
        type : String,
        required : true
    },

    weight : {
        type : Number,
        required : true
    }
});

const Demographics = mongoose.model('Demographics',DemographicsSchema);

module.exports = Demographics;
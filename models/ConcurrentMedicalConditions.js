const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const MedicalCondition = {
    name : {
        type : String
    },

    diagnosisDate : {
        type : Date
    },

    treatmentMedications : {
        type : [String]
    }
};

const ConcurrentMedicalConditionsSchema = new mongoose.Schema({
    nameOfMedicalCondition : {
        type : [MedicalCondition],
    }
});

const ConcurrentMedicalConditions = mongoose.model('ConcurrentMedicalConditions',ConcurrentMedicalConditionsSchema);

module.exports = ConcurrentMedicalConditions;
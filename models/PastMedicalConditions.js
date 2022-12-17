const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const MedicalConditionP = {
    name : {
        type : String
    },

    diagnosisStartDate : {
        type : Date
    },

    diagnosisEndDate : {
        type : Date
    }
};

const PastMedicalConditionsSchema = new mongoose.Schema({
    nameOfMedicalCondition : {
        type : [MedicalConditionP],
    }
});

const PastMedicalConditions = mongoose.model('PastMedicalConditions',PastMedicalConditionsSchema);

module.exports = PastMedicalConditions;
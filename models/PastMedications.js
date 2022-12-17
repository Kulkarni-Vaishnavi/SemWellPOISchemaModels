const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const MedicinalProduct = {
    
    name : {
        type : String
    },

    purposeOfUse : {
        type : String
    },

    frequency : {
        type : Number
    },

    diagnosisStartDate : {
        type : Date
    },

    diagnosisEndDate : {
        type : Date
    },

    usageRecomendations : {
        type : String
    }
};

const PastMedicationsSchema = new mongoose.Schema({
    nameOfMedicalProduct : {
        type : [MedicinalProduct],
    }
});

const PastMedications = mongoose.model('PastMedications',PastMedicationsSchema);

module.exports = PastMedications;
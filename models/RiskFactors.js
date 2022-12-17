const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const Pregnency = {

    isPregnent : {
        type : Boolean,
        required : true
    },

    pregnencyCondition : {
        type : String
    }

};

const Smoking = {

    isSmoking : {
        type : Boolean,
        required : true
    },

    ifStoppedDate : {
        type : Date
    }
};

const Alcohol = {

    isAlcohol : {
        type : Boolean,
        required : true
    },

    frequency : {
        type : Number
    }

};

const DrugAllergyNames = {

    isDrugAllergic : {
        type : Boolean,
        require : true
    },

    names : {
        type : [String]
    }
};

const RiskFactorsSchema = new mongoose.Schema({

    pregnency : {
        type : Pregnency,
    },

    smoking : {
        type : Smoking,
    },

    alcoholUse : {
        type : Alcohol,
    },

    drugAllergyHistory : {
        type : DrugAllergyNames,
    },

});

const RiskFactors = mongoose.model('RiskFactors',RiskFactorsSchema);

module.exports = RiskFactors;


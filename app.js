const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://harshak02:jntucse1234@cluster0.sttwkrc.mongodb.net/SemWellPat", {useNewUrlParser: true});

//concurrent Medical Conditions Helper
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

//Past Medical Conditions Helper-1
const MedicinalProduct = {
    
    name : {
        type : String
    },

    frequency : {
        type : Number
    },

    usageRecomendations : {
        type : String
    }
};

//Past Medical Conditions Helper-2
const MedicalConditionP = {

    name : {
        type : String
    },

    diagnosisStartDate : {
        type : Date
    },

    diagnosisEndDate : {
        type : Date
    },
    
    medicines : {
        type : [MedicinalProduct]
    }
    
};

//Risk Factors Helper
const RiskFactorsHelper = {

    isPregnent : {
        type : Boolean,
        required : true
    },

    pregnencyCondition : {
        type : String
    },

    isSmoking : {
        type : Boolean,
        required : true
    },

    ifStoppedDate : {
        type : Date
    },

    isAlcohol : {
        type : Boolean,
        required : true
    },

    frequency : {
        type : Number
    },

    isDrugAllergic : {
        type : Boolean,
        require : true
    },

    names : {
        type : [String]
    }

};


const PatientSchema = new mongoose.Schema({

    PId : {
        type : Number,
    },

    Name : {
        type : String,
        required : true
    },
    
    Age : {
        type : Number,
        required : true
    },

    Gender: {
        type : String,
        required : true
    },

    Weight : {
        type : Number,
        required : true
    },

    RiskFactors : RiskFactorsHelper,

    ConcurrentMedicalConditions : {
        nameOfMedicalCondition : {
            type : [MedicalCondition],
        }
    },

    PastMedicalConditions : {
        nameOfMedicalCondition : {
            type : [MedicalConditionP],
        }
    }

});

const Patient = mongoose.model('Patient',PatientSchema);


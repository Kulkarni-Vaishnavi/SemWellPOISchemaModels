const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://harshak02:jntucse1234@cluster0.sttwkrc.mongodb.net/SemWellPatient", {useNewUrlParser: true});

const Demographics = require('./models/Demographics');
const RiskFactors = require('./models/RiskFactors');
const ConcurrentMedicalConditions = require('./models/ConcurrentMedicalConditions');
const PastMedicalConditions = require('./models/PastMedicalConditions');
const PastMedications = require('./models/PastMedications');

const PatientSchema = new mongoose.Schema({

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
    },

    RiskFactors : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'RiskFactors'
    },

    ConcurrentMedicalConditions : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'ConcurrentMedicalConditions'
    },

    PastMedicalConditions : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'PastMedicalConditions'
    }

});

const Patient = mongoose.model('Patient',PatientSchema);

//adding new Patient Information

const newPatientDemographics = new Demographics({
    name : "abc",
    age : 21,
    gender : "male",
    weight : 65
});

const newPatientRiskFactors = new RiskFactors({

    pregnency : {
        isPregnent : true,
        pregnencyCondition : "Lactation"
    },

    smoking : {
        isSmoking : true,
        ifStoppedDate : new Date()
    },

    alcoholUse : {
        isAlcohol : true,
        frequency : 20
    },

    drugAllergyHistory : {
        isDrugAllergic : true,
        names : ["abc","xyx","hju"]
    }

});

const newPatientConcurrentMedicalConditions = new ConcurrentMedicalConditions({
    nameOfMedicalCondition : [
        {
            name : "Fever",
            diagnosisDate : new Date(),
            treatmentMedications : ["sample1","sample2"]
        },
        {
            name : "Cough",
            diagnosisDate : new Date(),
            treatmentMedications : ["sample3","sample4"]
        }
    ]
});

const newPatientPastMedicalConditions = new PastMedicalConditions({
    nameOfMedicalCondition : [
        {
            name : "Diabetics",
            diagnosisStartDate : new Date(),
            diagnosisEndDate : new Date()
        },
        {
            name : "Ache",
            diagnosisStartDate : new Date(),
            diagnosisEndDate : new Date()
        }
    ]
});

const newPatientPastMedications = new PastMedications({

    nameOfMedicalProduct : [
        {
            name : "sample1",
            purposeOfUse : "fever",
            frequency : 20,
            diagnosisStartDate : new Date(),
            diagnosisEndDate : new Date(),
            usageRecomendations : "Lorem Ipsum"
        },
        {
            name : "sample2",
            purposeOfUse : "stomachAche",
            frequency : 20,
            diagnosisStartDate : new Date(),
            diagnosisEndDate : new Date(),
            usageRecomendations : "Lorem Ipsum"
        }
    ]
});

newPatientDemographics.save();
newPatientRiskFactors.save();
newPatientConcurrentMedicalConditions.save();
newPatientPastMedicalConditions.save();
newPatientPastMedications.save();

const newPatient = new Patient({
    Demographics : newPatientDemographics,
    RiskFactors : newPatientRiskFactors,
    ConcurrentMedicalConditions : newPatientConcurrentMedicalConditions,
    PastMedicalConditions : newPatientPastMedicalConditions,
    PastMedications : newPatientPastMedications
});

newPatient.save();

console.log("done");
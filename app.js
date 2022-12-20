const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://harshak02:jntucse1234@cluster0.sttwkrc.mongodb.net/SemWellPat", {useNewUrlParser: true});

const RiskFactors = require('./models/RiskFactors');
const ConcurrentMedicalConditions = require('./models/ConcurrentMedicalConditions');
const PastMedicalConditions = require('./models/PastMedicalConditions');

const PatientSchema = new mongoose.Schema({

    pId : {
        type : Number,
    },

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

function PastMedicalConditionsClub(){
    const newPatientPastMedicalConditions = new PastMedicalConditions({
        nameOfMedicalCondition : [
            {
                name : "Diabetics",
                diagnosisStartDate : new Date(),
                diagnosisEndDate : new Date(),
                medicines : [
                    {
                        name : "sample2",
                        frequency : 20,
                        usageRecomendations : "Lorem Ipsum"
                    }
                ]
            },
            {
                name : "Ache",
                diagnosisStartDate : new Date(),
                diagnosisEndDate : new Date(),
                medicines : [
                    {
                        name : "sample3",
                        frequency : 10,
                        usageRecomendations : "Lorem Ipsum"
                    }
                ]
            },
        ]
    })
    newPatientPastMedicalConditions.save();
    return newPatientPastMedicalConditions;
}

function concurrentMedicalConditionsClub(){
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
    newPatientConcurrentMedicalConditions.save();
    return newPatientConcurrentMedicalConditions;
}

function riskFactorsClub(){
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
    
    })
    newPatientRiskFactors.save();
    return newPatientRiskFactors;
}

function mainClub(name,age,gender,weight,riskFactorsClub,concurrentMedicalConditionsClub,PastMedicalConditionsClub){
    // const newPatient = new Patient({
    //     name : name,
    //     age : age,
    //     gender : gender,
    //     weight : weight,
    //     RiskFactors : riskFactorsClub,
    //     concurrentMedicalConditionsClub : concurrentMedicalConditionsClub,
    //     PastMedicalConditions : PastMedicalConditionsClub
    // })
    // newPatient.save();
    // const num = newPatient._id;
    // const generatedId = parseInt(num,10);
    // newPatient.pId = generatedId;
    const obj = riskFactorsClub;
    console.log(obj);
    
}

function findPatient(pId){
    Patient.findOne({pId : pId},function(err,patientDetails){
        if(err){
            console.log("Error");
        }
        else{
            console.log(patientDetails);
        }
    })
}

mainClub("sampleName",90,"male",54,riskFactorsClub,concurrentMedicalConditionsClub,PastMedicalConditionsClub);

console.log("done");
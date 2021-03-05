const Pet = require('../models/pet.model');



module.exports = {

    addPet: (request, response) => {
    Pet.exists({name: request.body.name})
        .then(petExists => {
            if(petExists){
                return Promise.reject('Pet name already exists, please choose a different name.');
            }
            return Pet.create(request.body)
        })    
        .then((newPet) => {
            console.log(newPet);
            response.json(newPet)})
        .catch((err) => {
            console.log("error in addPet" + err);
            response.json(err);
        })
    },


    showAllPets: (request, response) => {
    Pet.find()
        .sort({type: "ascending"})
        .then(pets => response.json(pets))
        .catch(err => {
            console.log("error in showAllPets", err);
            response.json(err);
        })
    },

    viewPet: (request, response) => {
    Pet.findById(request.params.id)
        .then((onePet)=> {
            console.log(onePet);
            response.json(onePet);
        })
        .catch(err => console.log("error in viewPet" + err));
    },

    editPet: (request,response) => {
    Pet.findByIdAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
        .then((updatePet) => {
            console.log(updatePet);
            response.json(updatePet)})
        .catch((err)=> {
            console.log("error in editPet" + err);
            response.json(err);
        });
    },

    delete: (request, response) => {
        Pet.findByIdAndDelete(request.params.id)
            .then((deletePet)=> {
                console.log(deletePet);
                response.json(deletePet)
            })
            .catch((err)=> {
                console.log("error in Delete" + err);
                response.json(err);
        })
    },
};
            
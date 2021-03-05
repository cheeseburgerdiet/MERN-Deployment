const PetController = require("../controllers/pet.controller");

module.exports = function(app){
    app.get('/api/pets', PetController.showAllPets);
    app.post('/api/pets', PetController.addPet);
    app.get('/api/pets/:id', PetController.viewPet);
    app.put('/api/pets/:id', PetController.editPet);
    app.delete('/api/pets/:id', PetController.delete);
}
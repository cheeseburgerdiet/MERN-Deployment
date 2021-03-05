const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/petShelter', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(()=>console.log("Established connection to database"))
    .catch(err=> console.log("something went wrong when connecting to database", err));

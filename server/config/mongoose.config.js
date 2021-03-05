const mongoose = require('mongoose');
module.exports= (db_name) => {
    mongoose.connect('mongodb://localhost/' + db_name, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        .then(()=>console.log("Established connection to database"))
        .catch(err=> console.log("something went wrong when connecting to database", err));
}
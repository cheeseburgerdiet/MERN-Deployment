const express = require('express');
const cors = require ('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

require('dotenv').config();
require('./config/mongoose.config')(process.env.DB_NAME);
require('./routes/pet.routes')(app);

app.listen(process.env.DB_PORT, () => 
    console.log(`listening on port: ${process.env.DB}`));



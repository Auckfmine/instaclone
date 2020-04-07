const mongoose = require('mongoose');
const config = require('./index');

const db = mongoose.connect(config.mongo_uri,{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>console.log('connected To Database'))
.catch((err)=> console.error('An Error Has Occured',err));

module.exports = db;
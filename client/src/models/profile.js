const mongoose = require('mongoose');

//structure of the document
//modeling
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String
});
 
//create a collection named users with the schema userSchema
module.exports = mongoose.model('User', userSchema);
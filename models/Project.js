const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name :{
        type  : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        enum : ['Not Started','In Progress','Completed'],
    },
    clientId : {
        type : Schema.Types.ObjectId,
        ref : 'Client'
    },
});

module.exports = mongoose.model('Project',projectSchema);
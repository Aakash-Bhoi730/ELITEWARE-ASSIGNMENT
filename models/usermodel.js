const mongoose = require ('mongoose');
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema ({
    name: {
        type: String , required:true
    },
    email:{
        type:String, required:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique:true
    },
    city: {
        type: String, required: true
    }
})
userSchema.plugin(mongoosePaginate);
const User = mongoose.model('User',userSchema)
module.exports = User;
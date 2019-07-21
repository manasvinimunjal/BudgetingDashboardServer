const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const CategoriesSchema = new mongoose.Schema({
    //adding user to our model -> class 4-> authenticating and registering a user.
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    rent: {
        type:Number
    },
    groceries: {
        type:Number
    },
    carInsurance:{
        type:Number
    },
    travel:{
        type:Number
    },
    misc:{
        type:Number
    },

});

module.exports = Task = mongoose.model('task', CategoriesSchema);
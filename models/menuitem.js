const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['Sweet', 'Spicy', "Sour"],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    indegriends: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }

})

const menuitem = mongoose.model('menuitem', menuItemSchema)
module.exports= menuitem;


const mongoose=require("mongoose");

const itemsSchema = new mongoose.Schema({
    title:{
        type:String,
    },

    desc:{
        type:String,
    },

    photo:{
        type:String,
    }
});

const Item = mongoose.model("Item",itemsSchema);
module.exports = Item;


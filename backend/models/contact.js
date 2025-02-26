const mongoose= require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        firstname:{
            type: String,
            require : true

        },
        lastname:{
            type: String,
            require:true
        },

        comment:{
            type:String,
            require:true
        }
    }
)

const Contact = mongoose.model("Contact",contactSchema)
module.exports = Contact



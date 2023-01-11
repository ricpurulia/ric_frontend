const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require : [true , "Name is required"],
        },
        email:{
            type:String,
            require:[true, "email is required"],
            lowercase : true,
            validator: [validator.isEmail, 'please provide a valid email'],
        },
        image:{
            type:String,
            require : [true , "image is required"],
        },
        phNo:{
            type:Number,
            require : [true , "Number is required"],
        },
        year:{
            type:String,
            require : [true , "year is required"],
        },
        dept:{
            type:String,
            require : [true , "department is required"],
        },
        pos:{
            type:String,
            require : [true , "Position is required"],
        },
        cat:{
            type:String,
            require : [true , "cat is required"],
        },
        liUrl:{
            type:String,
            require : [true , "linedIn is required"],
        },
        fbUrl:{
            type:String,
            require : [true , "FB is required"],
        },
        ghUrl:{
            type:String,
            require : [false ],
        },
        placement:{
            type:String,
            require : [false],
        },
        internship:{
            type:String,
            require : [false ],
        },
        expertise:{
            type:String,
            require : [true , false],
        },
        interest:{
            type:String,
            require : [false ],
        },
    

    }
)

const User = mongoose.model('user',userSchema)
module.exports = User

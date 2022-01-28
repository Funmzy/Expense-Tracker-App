import {model, Schema} from 'mongoose';
import validator from 'validator'


const UserSchema = new Schema({

    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    
    email:{
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email',
        }
    },
 
    password: {
        type: String
    }   
}, 
    {
        timestamps: true
    }

)
export default model('User', UserSchema);

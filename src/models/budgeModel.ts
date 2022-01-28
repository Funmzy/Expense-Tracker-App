import {model, Schema} from 'mongoose';
import Items from './itemModel'



const BudgetSchema = new Schema({

    date:{
        type:Date,
        required: [true, 'Please fill in the date']
    },
    budget:{
        type:Number,
        required: [true, 'Please fill in your budget']
    },
    
    items: {
        type: [Items],
        required: [true, 'Please fill the list of items']
    },
    
    userId: {
        type: String
    }
}, 
    {
        timestamps: true
    }

)
export default model('Budget', BudgetSchema);

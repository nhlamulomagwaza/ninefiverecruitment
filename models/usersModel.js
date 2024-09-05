const mongoose= require('mongoose');


const usersSchema= new mongoose.Schema({




    username:{
        type:String,
        required:true,
        max:20,
        unique:true,

    },
    candidateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidates', // References the Candidates model
        required: false, 
      },

    email:{

        type:String,
        required:true,
        max:30,
        unique:true,
    },
       isAdmin:{

        type:Boolean,
        required:false,
        default:false,
       },
    password:{
          type:String,
          required:true,
          max:20,

    },
    
    confirmPassword:{
          type:String,
          required:true,
          max:20,

    },
    


}, {timestamps:true})


module.exports= mongoose.model('Users', usersSchema);
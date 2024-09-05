const mongoose= require('mongoose');


const candidatesSchema= new mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users', // References the Users model
      required: true,
    },
           name:{
            type: String,
            required:true,
            max:20,
           },

           surname:{

            type:String,
            required:true,
            max:20,
           },
             email:{

                type:String,
                required:true,
                max:20,
             },

             phone:{
                type:String,
                required:true,
                max:14,
             },
             industry:{


                type:String,
                required:true,

             },

             yearsOfExperience:{

                type:Number,
                required:true,
             },

             resume:{

                type:String,
                required:false,
             },


             savedJobs: [
               {
                 type: mongoose.Schema.Types.ObjectId,
                 ref: 'Jobs', // References the Jobs model
               },
             ],

             


             


},  {timestamps: true});


module.exports= mongoose.model('Candidates', candidatesSchema);

const mongoose = require('mongoose');

const jobsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  company:{
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
    
  },
  remote:{
     type:Boolean,
     required:true,
     default:false
  },

  location:{

    type:String,
    required:true,
    default: 'Midrand, Gauteng'

  },
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Candidates', 
    },
    
  ],
}, { timestamps: true });

module.exports = mongoose.model('Jobs', jobsSchema);
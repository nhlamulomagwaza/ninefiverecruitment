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
     required:false,
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



// Post-find middleware to validate applicants for existing jobs
jobsSchema.post('find', async function(jobs) {
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];

    // Loop through applicants and check if each candidate's ID exists in the database
    for (let j = 0; j < job.applicants.length; j++) {
      const candidate = await mongoose.model('Candidates').findById(job.applicants[j]);
      if (!candidate) {
        // Remove the invalid candidate ID from the applicants array
        job.applicants.splice(j, 1);
        j--; // Decrement the index to account for the removed element
      }
    }
  }
});

module.exports = mongoose.model('Jobs', jobsSchema);
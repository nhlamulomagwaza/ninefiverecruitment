const Jobs= require('../models/jobsModel');



const applyJob = async (req, res) => {
  try {
    const { jobId, candidateId } = req.params;

    // Validate the input data
    if (!jobId || !candidateId) {
      return res.status(400).json({ message: 'Please provide a job ID and candidate ID' });
    }

    // Find the job document in the database
    const job = await Jobs.findById(jobId);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Check if the candidate is already applied for the job
    if (job.applicants.includes(candidateId)) {
      return res.status(400).json({ message: 'You have already applied for this job' });
    }

    // Add the candidate to the applicants array
    job.applicants.push(candidateId);

    // Save the updated job document
    await job.save();

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const withdrawApplication = async (req, res) => {
    try {
      const { jobId, candidateId } = req.params;
  
      // Validate the input data
      if (!jobId || !candidateId) {
        return res.status(400).json({ message: 'Please provide a job ID and candidate ID' });
      }
  
      // Find the job document
      const job = await Jobs.findById(jobId);
  
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }
  
      // Check if the candidate has already applied for the job
      const candidateIndex = job.applicants.indexOf(candidateId);
  
      if (candidateIndex === -1) {
        return res.status(400).json({ message: 'Candidate has not applied for this job' });
      }
  
      // Remove the candidate from the applicants array
      job.applicants.splice(candidateIndex, 1);
  
      // Save the updated job document
      await job.save();
  
      res.status(200).json({ message: 'Application withdrawn successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };


module.exports = {applyJob, withdrawApplication};




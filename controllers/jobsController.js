const Jobs = require('../models/jobsModel');
const Candidates= require('../models/candidatesModel');



const addJobs = async (req, res) => {
  try {
    const { title, description, company, industry, remote, location } = req.body;
    console.log(req.body);
    // Validate the input data
    if (!title || !description || !industry || !company || !remote || !location) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }
 
    // Create a new job document
    const newJob = new Jobs({
      title,
      description,
      company,
      industry,
      remote,
      location,
      applicants: [],
    });

    // Save the new job document to the database
    await newJob.save();

    res.status(201).json({ message: 'Job added successfully', job: newJob });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


const deleteJobs = async (req, res) => {
  try {
    const { jobId } = req.params;

    // Validate the input data
    if (!jobId) {
      return res.status(400).json({ message: 'Please provide a job ID' });
    }

    // Find and delete the job document
    const deletedJob = await Jobs.findByIdAndDelete(jobId);

    if (!deletedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const updateJobs = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { title, description, company, industry, remote, location } = req.body;

    // Validate the input data
    if (!jobId || (!title && !description && !industry && !company && !remote && !location)) {
      return res.status(400).json({ message: 'Please provide a job ID and at least one field to update' });
    }

    // Find and update the job document
    const updatedJob = await Jobs.findByIdAndUpdate(jobId, { title, description, company, industry, remote, location }, { new: true });

    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json({ message: 'Job updated successfully', job: updatedJob });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getJobs = async (req, res) => {
  try {
    // Fetch all job documents
    const jobs = await Jobs.find();

    res.status(200).json({ message: 'Jobs fetched successfully', jobs });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
const getJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    // Validate the input data
    if (!jobId) {
      return res.status(400).json({ message: 'Please provide a job ID' });
    }

    // Find and return the job document
    const job = await Jobs.findById(jobId);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json({ message: 'Job fetched successfully', job });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


const saveJob = async (req, res) => {
  try {
    const { candidateId, jobId } = req.params;

    // Validate the input data
    if (!candidateId || !jobId) {
      return res.status(400).json({ message: 'Please provide a candidate ID and job ID' });
    }

    // Find the candidate document
    const candidate = await Candidates.findById(candidateId);

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    // Find the job document
    const job = await Jobs.findById(jobId);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Check if the job is already saved in the candidate's savedJobs array
    if (candidate.savedJobs.includes(jobId)) {
      return res.status(400).json({ message: 'Job has already been saved' });
    }

    // Add the job to the candidate's savedJobs array
    candidate.savedJobs.push(jobId);

    // Save the updated candidate document
    await candidate.save();

    res.status(200).json({ message: 'Job saved successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


const unsaveJob = async (req, res) => {
  try {
    const { candidateId, jobId } = req.params;

    // Validate the input data
    if (!candidateId || !jobId) {
      return res.status(400).json({ message: 'Please provide a candidate ID and job ID' });
    }

    // Find the candidate document
    const candidate = await Candidates.findById(candidateId);

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    // Find the job document
    const job = await Jobs.findById(jobId);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Check if the job is already saved in the candidate's savedJobs array
    const jobIndex = candidate.savedJobs.indexOf(jobId);

    if (jobIndex === -1) {
      return res.status(400).json({ message: 'Job has not been saved' });
    }

    // Remove the job from the candidate's savedJobs array
    candidate.savedJobs.splice(jobIndex, 1);

    // Save the updated candidate document
    await candidate.save();

    res.status(200).json({ message: 'Job unsaved successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getSavedJobs = async (req, res) => {
  try {
    const { candidateId } = req.params;

    // Validate the input data
    if (!candidateId) {
      return res.status(400).json({ message: 'Please provide a candidate ID' });
    }

    // Find the candidate document
    const candidate = await Candidates.findById(candidateId);

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    // Fetch the saved job documents using the candidate's savedJobs array
    const savedJobs = await Jobs.find({ _id: { $in: candidate.savedJobs } });

    res.status(200).json({ message: 'Saved jobs fetched successfully', jobs: savedJobs });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};




module.exports = {  addJobs, deleteJobs, updateJobs, getJobs, getJob, saveJob, getSavedJobs, unsaveJob};
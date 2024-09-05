const Candidates= require('../models/candidatesModel');
const fs = require('fs');
const mongoose=require('mongoose');

const cloudinary = require('cloudinary').v2;

//Cloudinary configuration
 cloudinary.config({
  cloud_name: 'dofj0x1ml',
  api_key: '299521161191728',
  api_secret: process.env.CLOUDINARY_SECRET,
}); 




//This operation fetches all candidates from database
const getAllCandidates = async (req, res) => {
  try {
  

    const candidates = await Candidates.find({});
    res.json(candidates);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};




//This operation fetches candidates from database by Id

const getCandidateById = async (req, res) => {
  try {
    const candidateId = req.params.candidateId;

    // Validate the candidateId parameter
    if (!mongoose.Types.ObjectId.isValid(candidateId)) {
      return res.status(400).json({ message: 'Invalid candidateId' });
    }

    const candidate = await Candidates.findById(candidateId);

    if (!candidate) return res.status(404).json({ message: 'Candidate not found' });

    console.log(candidate.userId.toString())
    console.log(req.user.id)
    // Checking if the user making the request is the same as the user associated with the candidate information
    if (candidate.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    res.json({
      userId: candidate.userId,
      name: candidate.name,
      surname: candidate.surname,
      email: candidate.email,
      phone: candidate.phone,
      industry: candidate.industry,
      yearsOfExperience: candidate.yearsOfExperience,
      resume: candidate.resume,
      savedJobs:candidate.savedJobs
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};


const addCandidateInfo = async (req, res) => {
  try {
    const { name, surname, email, phone, industry, yearsOfExperience } = req.body;
    const resume = req.file;

    if (!name || !surname || !email || !phone || !industry || !yearsOfExperience || !resume) {
      return res.status(400).json({ message: 'Please fill in all the required fields' });
    }
console.log(req.file)
    // Checking if the user making the request is the same as the user associated with the candidate information
    if (req.user.id !== req.params.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const candidateExists = await Candidates.findOne({ userId: req.params.userId});
    if (candidateExists) {
      return res.status(400).json({ message: 'you have already added your candidate profile'});
    }

    // Upload resume file to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(resume.path, {
      folder: 'candidates/resumes',
      public_id: `candidates/resumes/${email}`,
    });
    // Delete the temporary file saved on the server
   
    const candidate = await Candidates.create({
      userId: req.params.userId, // This associates the candidate with the user making the request
      name,
      surname,
      email,
      phone,
      industry,
      yearsOfExperience,
      resume: uploadResult.secure_url, // I'm storing the Cloudinary URL in the database
    });

    res.status(201).json({
      candidate
    });
    fs.unlinkSync(resume.path)
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};



const updateCandidateInfo = async (req, res) => {
  try {
    const { phone, industry, yearsOfExperience } = req.body;
    const resume = req.file;

    if (!phone && !industry && !yearsOfExperience && !resume) {
      return res.status(400).json({ message: 'Please provide at least one field to update' });
    }

    const candidate = await Candidates.findOne({ userId: req.params.userId });

    if (!candidate) return res.status(404).json({ message: 'Candidate not found' });

    if (req.user.id !== candidate.userId.toString()) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // Uploading the resume PDF file to Cloudinary if provided
    if (resume) {
      const uploadResult = await cloudinary.uploader.upload(resume.path, {
        folder: 'candidates/resumes',
        public_id: `candidates/resumes/${candidate.email}`,
      });
      candidate.resume = uploadResult.secure_url;

      // Deleting the temporary file saved on your server
      fs.unlinkSync(resume.path);
    }

    candidate.phone = phone || candidate.phone;
    candidate.industry = industry || candidate.industry;
    candidate.yearsOfExperience = yearsOfExperience || candidate.yearsOfExperience;

    await candidate.save();

    res.json({
      candidate
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};




 const deleteCandidate = async (req, res) => {
    try {
      const candidate = await Candidates.findByIdAndDelete(req.params.candidateId);
  
      if (!candidate) return res.status(404).json({ message: 'Candidate not found' });
  
      res.json({ message: 'Candidate deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };
  
  
  module.exports= { getAllCandidates,addCandidateInfo,
     updateCandidateInfo, deleteCandidate, getCandidateById};
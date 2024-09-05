const express= require('express');
const router= express.Router();
const {applyJob, withdrawApplication}= require('../controllers/applicationsController');


router.post('/apply/:jobId/:candidateId', applyJob);
router.delete('/withdrawapplication/:jobId/:candidateId', withdrawApplication);



module.exports= router;
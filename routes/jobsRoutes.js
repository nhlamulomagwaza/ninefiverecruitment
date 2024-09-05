const {addJobs, getJobs, deleteJobs,
     updateJobs, getJob, saveJob, unsaveJob,
     getSavedJobs}= require('../controllers/jobsController');

const express= require('express');
const router= express.Router();
const authenticateUsers= require('../auth/authenticateUsers');
const authenticateAdmin= require('../auth/authenticateAdmin');


router.post('/addjobs',  authenticateUsers, authenticateAdmin,addJobs);
router.post('/savejobs/:jobId/:candidateId',authenticateUsers, saveJob);
router.delete('/unsavejobs/:jobId/:candidateId', authenticateUsers,unsaveJob);
router.get('/getjobs', getJobs);
router.get('/getjob/:jobId', getJob);
router.get('/getsavedjobs/:candidateId', authenticateUsers, getSavedJobs)
router.put('/updatejobs/:jobId', authenticateUsers, authenticateAdmin, updateJobs);
router.delete('/deletejobs/:jobId', authenticateUsers, authenticateAdmin, deleteJobs);



module.exports= router;
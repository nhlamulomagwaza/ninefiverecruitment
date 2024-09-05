const {getAllCandidates,addCandidateInfo,
     updateCandidateInfo, deleteCandidate, getCandidateById }=
      require('../controllers/candidatesController');



      const express= require('express');
      const router= express.Router();
      const multer = require('multer');
      const upload = multer({ dest: './uploads/' });


router.get('/getCandidates', getAllCandidates);
router.get('/getCandidate/:candidateId', getCandidateById);
router.post('/createcandidate/:userId', upload.single('resume'), addCandidateInfo);
router.put('/updatecandidate/:userId',upload.single('resume'), updateCandidateInfo);
router.delete('/deletecandidate/:candidateId', deleteCandidate);





module.exports= router;
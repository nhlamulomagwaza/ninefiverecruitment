require('dotenv').config()
const express= require('express');
const app= express();
const PORT= process.env.PORT;
const candidatesRouter= require('./routes/candidatesRoutes');
const usersRouter= require('./routes/usersRoutes');
const jobsRouter= require('./routes/jobsRoutes');
const refreshTokenRouter= require('./routes/refreshTokenRoute');
const authenticateUsers= require('./auth/authenticateUsers');
const authenticateAdmin= require('./auth/authenticateAdmin');
const applicationsRoutes= require('./routes/applicationsRoutes');
const mongoose= require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const mimeTypes = require('mime-types');
const path= require('path');



  
app.use(express.json()); 

//Use the client app
app.use(express.static(path.join(__dirname, '/client/dist'), {
    setHeaders: (res, path) => {
      const mimeType = mimeTypes.lookup(path);
      console.log(`Path: ${path}, MimeType: ${mimeType}`);
      if (mimeType) {
        res.setHeader('Content-Type', mimeType);
      }
    }
  }));
  //Render client
  
  


app.use(cors(corsOptions))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 600000 } // Set the cookie expiration time
  }));
  
  app.use(cookieParser())




  
app.use('/api/candidates', authenticateUsers, candidatesRouter);
app.use('/api/users', usersRouter);
app.use('/api/jobsportal', jobsRouter);
app.use('/api/jobsportal', authenticateUsers, applicationsRoutes );
app.use('/api/tokens', refreshTokenRouter);
app.get('*', (req, res)=>{
  
  res.sendFile(path.join(__dirname,'/client/dist/index.html'))
});


mongoose.connect(process.env.MONGO_URI);
const db= mongoose.connection;
db.once('open', ()=>{
console.log('connected to mongodb')
 })
 db.on('error', ()=>{
    console.log('failed to connect to database')
})


app.listen(PORT, (err)=>{
    console.log('server started on port ' + PORT)

    if(err){
        console.log(err)
    }
})
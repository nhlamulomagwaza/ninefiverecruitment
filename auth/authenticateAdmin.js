//This function is a middleware for protecting admin routes

const authenticateAdmin = (req, res, next) => {
    if (!req.user || !req.user.isAdmin) {
      return res.status(403).json({ message: 'only adminstrators can access this route' });
    }
    
    next();
  };


  module.exports= authenticateAdmin;
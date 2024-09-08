const allowedOrigins = require('./allowedOrigins')

const corsOptions = (res) => {
  return {
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        res.header('Access-Control-Allow-Origin', origin)
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
    optionsSuccessStatus: 200
  }
}

module.exports = corsOptions
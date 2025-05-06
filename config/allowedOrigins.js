//Setting cors origins is simply saying, what domains can access our server?

const allowedOrigins = [
  '*',
    'http://localhost:3500',
    'https://ninefiverecruitment.com',
    'https://admin.ninefiverecruitment.com',
    'http://admin.ninefiverecruitment.com',
    'http://localhost:5174',
    'http://localhost:5173',
    'https://ninefiveadmin.netlify.app/',
  'http://ninefiveadmin.netlify.app/',
  'https://ninefivedash.onrender.com',
    'http://ninefivedash.onrender.com',
    'http://ninefiverecruitment.com',
    'https://ninefiverecruitment.onrender.com',
    'http://ninefiverecruitment.onrender.com',
    'http://localhost:3000',
]

module.exports = allowedOrigins

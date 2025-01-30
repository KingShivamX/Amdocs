const allowedOrigins = {
  development: [
    'http://localhost:5173',    // Vite default
    'http://localhost:3000'     // Alternative local development
  ],
  production: [
    'https://pathwise-ai.vercel.app',
    'https://www.pathwise-ai.vercel.app',
  ],
  // You can add more environments like staging if needed
};

const corsOptions = {
  origin: function (origin, callback) {
    // Get allowed origins based on environment
    const allowed = allowedOrigins[process.env.NODE_ENV || 'development'];
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      callback(null, true);
      return;
    }
    
    if (allowed.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,  // Allow credentials (cookies, authorization headers)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  maxAge: 86400 // Cache preflight request for 24 hours
};

module.exports = corsOptions; 
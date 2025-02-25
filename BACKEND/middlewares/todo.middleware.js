// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
  
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Attach user info (e.g., email) to the request
//     next();
//   } catch (error) {
//     res.status(403).json({ message: 'Invalid token' });
//   }
// };

// module.exports = authMiddleware;


// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     // Verify the token using your secret key
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Attach user info (e.g., email) to the request object
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: 'Invalid token' });
//   }
// };

// module.exports = authMiddleware;



// const jwt = require('jsonwebtoken');

// const todoMiddleware = (req, res, next) => {
//   // const token = req.headers.authorization?.split(' ')[1];
//   const token=req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure JWT_SECRET matches your server config
//     req.user = decoded; // Attach user info to the request
//     next();
//   } catch (error) {
//     res.status(403).json({ message: 'Invalid token' });
//   }
// };

// module.exports = todoMiddleware;


const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // const token = req.headers.authorization?.split(' ')[1];  // Extract token from Authorization header
  const token=req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify the token and extract user data (e.g., email)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach decoded data (userEmail) to req.user
    next();  // Proceed to the next middleware/handler
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;



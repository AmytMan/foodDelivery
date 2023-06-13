import jwt from 'jsonwebtoken';

function authMiddleware(req, res, next) {
  const cookie = req.headers.cookie;
  const token = cookie.split("=")[1]
 const secretkey =process.env.SECRET_KEY
  try {
    const decodedToken = jwt.verify(token, secretkey);
    req.id = decodedToken.id;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' });
    } else if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    } else {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default authMiddleware;

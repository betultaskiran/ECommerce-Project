const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  console.log(req.header("Authorization"), "gelen token");
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "no token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: "invalid token" });
  }
};

module.exports = authMiddleware;

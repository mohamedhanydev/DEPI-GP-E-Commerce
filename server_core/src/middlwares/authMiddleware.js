const jwtService = require("../services/jwtService");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res
      .status(401)
      .json({ message: "Access Denied: No authorization header provided" });
  const token = authHeader.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .json({ message: "Access Denied: No Token provided" });
  try {
    const decodedPayload = await jwtService.verifyToken(token);
    req.user = decodedPayload;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError")
      return res.status(401).json({
        message: "Session Expired: please log in again",
        error: error.name,
      });
    return res.status(403).json({
      message: "Access Denied: Invalid",
      error: error.name,
    });
  }
};
module.exports = auth;

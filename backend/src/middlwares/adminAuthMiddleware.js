const adminAuth = (req, res, next) => {
    // Assuming req.user is populated by the existing auth middleware
    if (!req.user || req.user.role !== 'admin') { // Assuming 'role' is a field in the user payload
        return res.status(403).json({ message: 'Access Denied: You do not have administrator privileges.' });
    }
    next();
};

module.exports = adminAuth;

const userDatabase = require('../database/users');

class ServiceError extends Error {
    constructor(message, status = 500) {
        super(message);
        this.name = "ServiceError";
        this.status = status;
    }
}

const registerUser = async (userData) => {
    const { email } = userData;
    const existingUser = await userDatabase.findUserByEmail(email);
    if (existingUser) {
        throw new ServiceError("User with this email already exists", 409); // 409 Conflict
    }
    const newUser = await userDatabase.createUser(userData);
    return newUser;
};

const loginUser = async (email, password) => {
    const user = await userDatabase.findUserByEmail(email);
    if (!user) {
        throw new ServiceError("User not found", 404); // 404 Not Found
    }
    // For now, without proper authentication, just compare passwords directly
    // In a real application, you would hash the password and compare hashes
    if (user.password !== password) {
        throw new ServiceError("Incorrect password", 401); // 401 Unauthorized
    }
    return user;
};

module.exports = {
    registerUser,
    loginUser,
};
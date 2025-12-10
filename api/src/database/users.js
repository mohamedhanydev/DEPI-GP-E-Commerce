const User = require('../models/User');
const ServiceError = require('../errors/ServiceError');

const createUser = async (userData) => {
    try {
        const newUser = new User(userData);
        await newUser.save();
        return newUser;
    } catch (error) {
        throw new ServiceError(error.message, 500);
    }
};

const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        throw new ServiceError(error.message, 500);
    }
};

module.exports = {
    createUser,
    findUserByEmail,
};
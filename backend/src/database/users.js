const User = require('../models/User');

const createUser = async (userData) => {
    try {
        const newUser = new User(userData);
        await newUser.save();
        return newUser;
    } catch (error) {
        throw { status: 500, message: error.message };
    }
};

const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        throw { status: 500, message: error.message };
    }
};

module.exports = {
    createUser,
    findUserByEmail,
};
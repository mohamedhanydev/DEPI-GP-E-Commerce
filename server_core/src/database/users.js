import User from '../models/User.js';
import ServiceError from '../errors/ServiceError.js';

export const createUser = async (userData) => {
    try {
        const newUser = new User(userData);
        await newUser.save();
        return newUser;
    } catch (error) {
        throw new ServiceError(error.message, 500);
    }
};

export const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        throw new ServiceError(error.message, 500);
    }
};
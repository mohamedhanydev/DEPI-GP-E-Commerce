const userService = require("../services/users");

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).send({ status: "FAILED", message: "Missing required fields" });
            return;
        }
        const newUser = await userService.registerUser({ username, email, password });
        res.status(201).send({ status: "OK", data: newUser });
    } catch (error) {
        res
            .status(error.status || 500)
            .send({ status: "FAILED", message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).send({ status: "FAILED", message: "Missing email or password" });
            return;
        }
        const user = await userService.loginUser(email, password);
        res.status(200).send({ status: "OK", data: user });
    } catch (error) {
        res
            .status(error.status || 500)
            .send({ status: "FAILED", message: error.message });
    }
};

module.exports = {
    register,
    login,
};
const users = require('../db/arrayUsers.json')
const generateJWT = require('../utilities/generateJWT');

function login (req, res) {
    console.log(req.body);
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);
    console.log(user);
    if (!user) {
        res.status(404).send("User not found");
        return;
    }

    const token = generateJWT(user);
    console.log(token)
    res.json({
        token,
    });
}

module.exports = {
    login,
}
const jwt = require('jsonwebtoken');

module.exports = function generateJWT(user) {

    const playload = {
        id: user.id,
        username: user.username,
        email: user.email
    }

    return jwt.sign(playload, process.env.JWT_SECRET, { expiresIn: '1h' });
}
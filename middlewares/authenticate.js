const express = require('express');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next ) {
    const bearerToken = req.header('Authorization');

    if (!bearerToken) {
        return res.status(401).send('Access Denied');
    }

    const token = bearerToken.split(' ')[1];

    const jwtPlayload = jwt.verify(token, process.env.JWT_SECRET);

    req['user'] = jwtPlayload;

    next();
}
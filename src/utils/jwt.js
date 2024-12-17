jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config')

function createAccessToken(user) {
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 5);
    return jwt.sign(_tokenPayload(user, expiration), JWT_SECRET, { algorithm: 'HS256' });
}

function createRefreshToken(user) {
    const expiration = new Date();
    expiration.setMonth(expiration.getMonth() + 1);
    return jwt.sign(_tokenPayload(user, expiration, 'refresh'), JWT_SECRET, { algorithm: 'HS256' });
}

function decodeToken(token) {
    console.log(jwt.verify(token, JWT_SECRET,));
    return jwt.verify(token, JWT_SECRET);
}

function refreshAccessToken(refreshToken) {
    const decoded = jwt.verify(refreshToken, JWT_SECRET);
    const newAccessToken = createAccessToken(decoded.user);
    return newAccessToken;
}

function _tokenPayload(user, expiration, tokenType = 'token') {
    return {
        tokenType,
        user,
        iat: new Date().getTime(),
        exp: expiration.getTime(),
    }
}

module.exports = {
    createAccessToken,
    createRefreshToken,
    decodeToken,
    refreshAccessToken
}
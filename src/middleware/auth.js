const { decodeToken } = require('../utils/jwt')

function authenticateted(req, res, next) {
    const auth =  req.headers.authorization
    if(!auth) return res.status(400).send({response: 'unauthorized, token required'})
    const token = auth.replace('Bearer ','').replace(/"/g, '');
    const tokenData = decodeToken(token);
    const { active } = tokenData.user;
    const { exp } = tokenData;
    const currentDate = new Date().getTime();
    if(exp < currentDate) return res.status(400).send({response: 'expired token'})
    next() 
    if(!active) return res.status(401).send({response: 'unauthorized, inactive user'})
    // res.status(500).send({response: 'unauthorized'})
}

module.exports = {
    authenticateted,
}
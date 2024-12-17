const User =  require('../models/user');
var bcrypt = require('bcryptjs');
const {hashPass} = require('../utils/utils.js');
const { createAccessToken, createRefreshToken, refreshAccessToken } = require('../utils/jwt.js');

function register(req, res) {
    const {name, lastName, email, role, active, identifyer, organizationId, passWord, branchId, gender, phone} = req.body

    const payload = {
        name,
        lastName,
        email,
        role,
        active,
        identifyer,
        organizationId,
        branchId,
        gender,
        phone,
        passWord : hashPass(passWord)
    }

    User.create(payload).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function login(req, res) {
    const {email, passWord, organizationId} = req.body
    console.log(email, passWord, organizationId)
    User.findOne({email: email}).then(response => {
        //lo agregue porque vi que la rta llega en null cuando el correo no exixte... no se si deberia, en el tutorial no pasaba eso
        if(response == null || response.organizationId.toString() != organizationId) return res.status(400).send({response: 'Usuario y/o contraseña incorrectos'});
        const success = bcrypt.compareSync(passWord, response.passWord)
        if(!success) return res.status(400).send({response: 'Usuario y/o contraseña incorrectos'});
        if(!response.active) return res.status(401).send({response: 'Usuario inactivo'});
        let userData = response.toObject();
        delete userData.passWord
        res.status(200).send({response: {
            token: createAccessToken(userData),
            refresh: createRefreshToken(userData)
        }})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function refresh(req, res) {
    const { refreshToken } = req.body;

    if (!refreshToken) return res.status(400).send({ message: 'Refresh token required' });

    try {
        const newAccessToken = refreshAccessToken(refreshToken);
        res.send({ accessToken: newAccessToken });
    } catch (err) {
        res.status(401).send({ message: 'Invalid or expired refresh token' });
    }
}

module.exports = {
    register,
    login,
    refresh
}
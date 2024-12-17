var bcrypt = require('bcryptjs');

function hashPass(pass) {
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(pass, salt);
}

function compare(str, hash) {
    return bcrypt.compareSync(str, hash);
}

module.exports = {
    hashPass,
    compare
}
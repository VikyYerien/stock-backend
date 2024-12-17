const mongoose = require('mongoose');

const { DB_HOST, DB_USER, DB_PASSWORD, PORT } = require('./config/config')

const app = require('./app')

const mongoosedbUri = `mongodb+srv://${ DB_USER }:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority&appName=Cluster0`
console.log(mongoosedbUri)
async function start() {
    try {
        await mongoose.connect(mongoosedbUri)
        app.listen(PORT, ()=> console.log('Listening on port', PORT))
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

start()
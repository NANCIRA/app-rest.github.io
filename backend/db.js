const admin = require('firebase-admin')

//const dotenv = require('dotenv')
//dotenv.config()
const serviceaccount = require('../../key.json')
admin.initializeApp({
    credenttial: admin.credential.cert(serviceaccount)
})

const db= admin.firestore()

module.exports = db
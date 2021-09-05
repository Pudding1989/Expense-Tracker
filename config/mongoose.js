const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/expense-tracker'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, '！！MongoDB ERROR:'))
db.once('open', () => { console.log('MongoDB Connected  ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡ ') })

module.exports = db

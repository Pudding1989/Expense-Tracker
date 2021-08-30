const db = require('../../config/mongoose')

const Record = require('../record')
const seeds = require('./seedData')

db.once('open', async () =>  {
  console.log('Seeder connect to MongoDB ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡ ')
  //insertMany 可寫入多筆資料
  await Record.insertMany(seeds)

  console.log('播種完畢 <(￣︶￣)>')
  process.exit()
})


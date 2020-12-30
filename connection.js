const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bioskop',
  password: 'Warior12345',
  port: 5432,
})

module.exports = pool;
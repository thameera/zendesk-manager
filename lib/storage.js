'use strict'

const fs = require('fs')

const FILE_PATH = `${process.env.DATA_DIR}/data.json`

const load = () => {
  let json = []

  try {
    const raw = fs.readFileSync(FILE_PATH, 'utf8')
    json = JSON.parse(raw)
  } catch (e) {
    console.log(`Error parsing JSON: ${e}`)
  }

  return json
}

const save = tickets => {
  return fs.writeFileSync(FILE_PATH, JSON.stringify(tickets), 'utf8')
}

module.exports = {
  load,
  save
}

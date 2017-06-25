'use strict'

const rp = require('request-promise')

const tenant = process.env.ZD_TENANT
const userid = process.env.ZD_USER_ID
const user = process.env.ZD_USERNAME
const pass = process.env.ZD_PASSWORD
const auth = new Buffer(`${user}:${pass}`).toString('base64')
const zd_url = `https://${tenant}.zendesk.com/api/v2/users/${userid}/tickets/assigned.json`

const req_opts = {
  url: zd_url,
  json: true,
  headers: {
    Authorization: `Basic ${auth}`
  }
}

const fetch = () => {
  return rp(req_opts)
    .then(data => {
      return data.tickets
    })
    .catch(err => {
      console.log(`ERROR fetching from Zendesk: ${err}`)
      return []
    })
}

module.exports = {
  fetch
}

const { team } = require('../models/index')

const listAll = async () => {
  return item = await team.findAll()
}

const save = async data => {
  return item = await team.create(data)
}

module.exports = {
  listAll,
  save
}
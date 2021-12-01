const teamService = require('../service/team.service')

const listAll = async (req, res) => {
  const item = await teamService.listAll()
  res.send(item)
}

const save = async (req, res) => {
  const item = await teamService.save(req.body)
  res.send(item)
}


module.exports = {
  listAll,
  save
}
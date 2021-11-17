const Sequelize = require('sequelize')

const connection = new Sequelize('nodepress', 'root', null, {
    host: 'localhost', 
    dialect: 'mysql', 
    timezone: '-03:00'
})


module.exports = connection
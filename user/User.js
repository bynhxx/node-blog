// MODEL USER

const Sequelize = require('sequelize')
const connection = require('../database/database')


const User = connection.define('users', {
    email: {
        type: Sequelize.STRING, 
        allowNull: false, 
    }, 
    password: {
        type: Sequelize.STRING, 
        allowNull: false
    }
})


//criando tabela
//User.sync({force:true})

module.exports = User

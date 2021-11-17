// MODEL DE ARTIGO
const Sequelize = require('sequelize')
const connection = require('../database/database')
//importando para definir o relacionamento
const Category = require('../categories/Category')



//Definindo tablela
const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING, 
        allowNull: false, 
    }, 
    slug: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})


//RELACIONAMENTOS
//Relacionamento 1 -> 1
Article.belongsTo(Category)

//Relacionamento 1 -> N
Category.hasMany(Article)

//Article.sync({force:true})


module.exports = Article
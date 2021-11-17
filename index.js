const express = require('express')
const app = express()
const bodyParser = require('body-parser') 
const connection = require('./database/database')
const  Sequelize = require('sequelize')
const session = require("express-session")

const CategoriesController = require('./categories/CategoriesController')
const ArticlesController = require('./articles/ArticlesController')
const UserController = require('./user/UserController')

const Category = require('./categories/Category')
const Article = require('./articles/Article')
const User = require('./user/User')


//Configurações: 
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//definindo onde os arquivos estáticos estarão
app.use(express.static('public'))

//conexão BD
connection.authenticate()
    .then(() => {
        console.log("Conexão com BD feita com sucesso")
    })
    .catch((err) => {
        console.log(err)
    })

//SESSIONS
app.use(session({
    secret: "qualquercoisa", 
    cookie: {
        maxAge: 300000000
    }
}))



// ROTAS
//informa ao express para usar as rotas definidas no arquivo externo
app.use('/', CategoriesController)
app.use('/', ArticlesController)
app.use('/', UserController)

app.get('/', (req,res) => {
    Article.findAll({
        order: [['id', 'DESC']]
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render('index', {articles: articles, categories: categories})
        })
    })
}) 

app.get('/:slug', (req, res) => {
    let slug = req.params.slug
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render('article', {article: article, categories: categories})
            })
        } else {
            res.redirect('/')
        }
    }).catch(err => {
        res.redirect('/')
    })
})

app.get('/category/:slug', (req, res) => {
    let slug = req.params.slug
    Category.findOne({
        where: {
            slug: slug
        }, include: [{model: Article}]
    }).then(category => {
        if(category != undefined){
            Category.findAll().then(categories => {
                res.render('index', {articles: category.articles, categories: categories })
            })
        } else {
            res.redirect('/')
        }
    }).catch(err => {
        res.redirect('/')
    })
})


//SERVIDOR
app.listen(8080, () => {
    console.log("Servidor inicializado (8080)")
})
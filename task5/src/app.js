const express = require('express')
const path = require('path')
const hbs = require('hbs')

const myMethods = require('./utils/functions')
const app = express()
const PORT = process.env.PORT

app.set('view engine', 'hbs')

const publicDIr = path.join(__dirname, '../publicStatic')
app.use(express.static(publicDIr))
const viewsDir = path.join(__dirname, '../FrontEnd/views')
app.set('views', viewsDir) 
const partials = path.join(__dirname, '../FrontEnd/partials')
hbs.registerPartials(partials)

app.get('/', (req, res) => { 
    if (req.query.name && req.query.phone) {
        user = {
            name: req.query.name,
            email: req.query.email,
            phone: req.query.phone,
            msg: req.query.msg
        }
        myMethods.addUser(user)
        return res.redirect('/showAll')
    }
    res.render('index.hbs')
})
app.get('/showAll', (req, res) => {
myMethods.showAll((err,data)=>{res.render('showAll',{data})})
})
app.get('/showAll/:id', (req, res) => {
    id=req.params.id
    myMethods.oneUser(id, (err, data)=>{ 
        res.render('single',{data})
    })
})
 
app.get('/deleteUser/:id', (req,res)=>{
    user = req.params.id
    myMethods.deleteUser(user)
    res.redirect('/showAll')
})
app.get('/edituser/:id/', (req,res)=>{
    
    user = req.params.id
    if (req.query.name && req.query.phone) {
    myMethods.editUser(user,req.query.name, req.query.email, req.query.phone, req.query.msg)

     res.redirect('/showAll')
    }

    res.render('edituser.hbs')
})



app.listen(PORT)
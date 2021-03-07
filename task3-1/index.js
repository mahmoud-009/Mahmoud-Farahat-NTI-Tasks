const data = require('./data')
data.getData('albums',(error , result ) =>{
    if(error) console.log(error)
    else console.log(result)
})
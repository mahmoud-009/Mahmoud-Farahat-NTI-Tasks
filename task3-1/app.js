// const request = require('request')
// const url = `https://jsonplaceholder.typicode.com/albums`

// request({url, json:true},(e,{body})=>{
//     if(e) console.log(e.message)
//     else console.log(body)
// })

const https = require('https')
const url = `https://jsonplaceholder.typicode.com/todos`

const myRequest = https.request(url , (response)=>{
    let data = ''
    response.on('data', (chunk)=>{
        data = data + chunk.toString()
    })
    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
})
myRequest.on('error', (error)=>console.log('error'))
myRequest.end()
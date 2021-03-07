// const request = require('request')
// const getData = (api,Callback) => {
//     if (api =='posts')    url ='https://jsonplaceholder.typicode.com/posts'
//     else if ( api =='albums') url = 'https://jsonplaceholder.typicode.com/albums'
//     request ({url , json:true},(e, {body}) =>{
//         if(e) Callback('error in api service', false)
//         else if(body.error) Callback('error inside api body', false)
//         else Callback (false,body)
//     }
//     )}


// module.exports= {
//     getData
// }
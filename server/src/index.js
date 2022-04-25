import express from 'express'
import router from './routes/routes.js'
// call back function
const main = async () =>{
const app = express()
const port = 3000
//port must be greater than 2000
// server -> routes -> db -> schema table(shape of the schema userData, MessageData) -> resolvers/controllers -> routing -> frontend (/create) chatwebsite/create form 
  // query [:id-> post -> return post] mutation [change in site or db -> posting an article on blogging, on ecommerce]
app.use('/',router)
// app.get('/',(request,response)=>{
//     response.send('hello world')
// })
app.listen(port,()=>{
    console.log('server at port',port)
} )
}
//to catch error
 main().catch((err)=>{
     console.log(err)
 })
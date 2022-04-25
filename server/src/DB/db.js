YQIVbIiy5eiuDm0G
import mongoose from 'mongoose'
const Connection = async () => {
try{

const url ="mongodb+srv://Rajwardhan:YQIVbIiy5eiuDm0G@cluster0.j5cdb.mongodb.net/Cluster0?retryWrites=true&w=majority"
await mongoose.connect(url)
console.log("db connected successfully")
}
catch(error){
    console.log("db not connected ",error);
}
};
export default Connection
import Mongoose from 'mongoose';

const Connection= async (username,password)=>{
    const URL=`mongodb://${username}:${password}@users-shard-00-00.n9ah0.mongodb.net:27017,users-shard-00-01.n9ah0.mongodb.net:27017,users-shard-00-02.n9ah0.mongodb.net:27017/LOGINPAGE?ssl=true&replicaSet=atlas-hd3b8h-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await Mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('DataBase Connected Successfully');
    } catch(error){
        console.log('Error while connecting to mongodb',error);
    }

}
export default Connection;
import mongoose from "mongoose";
class categoryController{
    static category = async(req,res)=>{
        const fetchedData = mongoose.connection.db.collection("category");
        const data = await fetchedData.find({}).toArray();
        res.send(data)      
    }
}
export {categoryController}
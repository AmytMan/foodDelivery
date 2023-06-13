import mongoose from "mongoose";
class foodDataController{
    static foodMenu = async(req,res)=>{
        const fetchedData = mongoose.connection.db.collection("foods");
        const data = await fetchedData.find({}).toArray();
        res.send(data)      
    }
}
export {foodDataController}
import mongoose from "mongoose";

class getUserController {
  static getUser = async (req, res) => {
    const { email } = req.body; // Assuming the token is passed in the request body

    try {
      const fetchedData = mongoose.connection.db.collection("users");
      const data = await fetchedData.find({ email: email }).toArray();
      res.send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error fetching user data");
    }
  }
}

export { getUserController };

import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const isAlreadyConnected = mongoose.connections[0].readyState;

    if (isAlreadyConnected) return;

    await mongoose.connect(process.env.DB_CONNECTION_STRING!);

    console.log("# Connected to db successfully !");
  } catch (error) {
    console.log("# Error in db connection =>", error);
  }
};

export default connectToDB;

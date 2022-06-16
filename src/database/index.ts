import mongoose from "mongoose";

export const databaseConnection = () =>
  mongoose.connect(process.env.DB_CONNECTION as string, () => {
    console.log("connected to DB!");
  });

import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bookRoute from "./route/book.route.js"
const app = express()
app.use(cors())
dotenv.config()
app.use(express.json());
const PORT=process.env.PORT|| 4000
const URI = process.env.MongoDBURI

//connect to mongodb
try{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("MongoDB connected")
}
catch(error){
    console.log("Error", error)

}

//defining routes
app.use("/book", bookRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
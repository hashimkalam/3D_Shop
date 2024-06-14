import express from "express";
import * as dotnev from 'dotenv'
import cors from 'cors'

dotnev.config();

const app = express();
app.use(cors())
app.use(express.json({ limit: "50mb" }))

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello From DALL.E" })
})

app.listen(8080, () => console.log("Server has started on  PORT 8080"))
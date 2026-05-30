import dotenv from 'dotenv'
import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config();

const app = express();
const port = process.env.PORT;


app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
)

app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});


app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

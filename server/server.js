const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
const { registerUser } = require("./controllers/auth/auth-controller");




mongoose.connect("mongodb://localhost:27017/Ecommerce").then(() => {
    console.log("DB Connection Successfull");
}).catch((err) => {
    console.log(err);
});


const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors({
    localhost: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type",
                "Authorization",
                "Cache-Control",
                "Expires",
                "Pragma",],
                credentials: true
})
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);


app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`))
const express = require("express");
const app = express();
const userRoutes = require("./routes/User");
const contactUsRoute = require("./routes/Contact");
const forgotRoute =require('../server/routes/ForgotPassword');
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const profileRoutes = require("./routes/Profile");
const {cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
dotenv.config();
const PORT =  4000;


//database connect
database.connect();
//middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
 cors({
   origin: 'http://localhost:5173',
   credentials:true,
 })
)

app.use(
 fileUpload({
   useTempFiles:true,
   tempFileDir:"/tmp",
 })
)
//cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1", contactUsRoute);
app.use('/api/v1',forgotRoute)

//def route
app.get("/", (req, res) => {
  return res.json({
    success:true,
    message:'Your server is up and running....'
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`)
});
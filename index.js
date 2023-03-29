const express = require("express");
require('./models/config')
require('dotenv').config()
const userRouter = require('./routes/userRouter');
const companyRouter=require('./routes/companyRouter')
const reviewRouter=require('./routes/reviewRouter')

//let User =require('./model/userSchema')
const app = express();
app.use(express.json()); //middleware
 app.use('/', userRouter);
// app.use("/", companyRouter);
// app.use("/", reviewRouter);

console.log('port', process.env.port)
app.listen(9000, () => {
    console.log(`Server running at ${process.env.port}`);
});

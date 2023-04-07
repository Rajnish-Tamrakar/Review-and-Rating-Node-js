const express = require("express");
require('./models/config')
require('dotenv').config()
const userRouter = require('./routes/userRouter');
const companyRouter=require('./routes/companyRouter')
const reviewRouter=require('./routes/reviewRouter')
const app = express();
app.use(express.json()); //middleware



app.use('/', userRouter);//middleware
app.use('/company',require("./routes/companyRoutes"))
        
console.log('hey i am env i am running on port', process.env.port)
app.listen(9000, () => {
    console.log(`Server running at ${process.env.port}`);
});

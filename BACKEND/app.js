// const dotenv=require('dotenv')
// dotenv.config()
// const express=require('express');
// const cors=require('cors')
// const app=express();
// const cookieParser=require('cookie-parser');
// const connectToDb=require('./db/db');
// const userRoutes=require('./routes/user.routes');
// const groupRoomRoutes = require('./routes/group.routes');
// const quizRoutes = require('./routes/quiz.routes');
// connectToDb();
// app.use(cors())
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(cookieParser());

// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// });

// app.use('/user',userRoutes);
// app.use('/group',groupRoomRoutes);


// module.exports=app;

const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const groupRoomRoutes = require('./routes/group.routes');
const todoRoutes = require('./routes/todo.routes');

connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Base route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// User routes
app.use('/user', userRoutes);

// Group routes
app.use('/group', groupRoomRoutes);
// app.use('/api', recommendationRoutes);
app.use('/todos', todoRoutes);

module.exports = app;



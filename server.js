const express = require('express');
const mongoose = require('mongoose');
const {MONGO_URI} = require('./config');

// routes
const postsRoutes = require('./routes/api/posts')



const app = express();

// bodyParser middleware
app.use(express.json());

mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log('database connected'))
.catch(err => console.log(err));


app.get('/',(req,res) =>{
    res.send('Hello from node');
})


// user routes
app.use('/api/posts',postsRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`server is running at ${PORT}`))
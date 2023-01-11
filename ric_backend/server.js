const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');



const db = `mongodb+srv://ric:ric@cluster0.miau4pq.mongodb.net/ric?retryWrites=true&w=majority`
mongoose.connect(db).then(()=>{
    console.log('connection successfull')
})

const port =  process.env.PORT || 8000;
const server = app.listen(port, () => { 
  console.log(`App running on port ${port}`);
});

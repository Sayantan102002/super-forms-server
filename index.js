// const connectToMongo = require('./db');
const express = require('express');
// connectToMongo();
const app = express();
const userRoutes = require('./routes/user.js')

const port = 5000
var cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }))
// app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))
app.use(express.urlencoded({ limit: "30mb", extended: true }))



app.get('/', (req, res) => {
  res.send("This is a superforms")

})

app.use('/user', userRoutes)




const database_url = "mongodb+srv://ssscgm:T3qsVrrvpQ8UYzgr@cluster0.tlhwxxy.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  app.listen(port, () => {
    console.log(`superforms app is listening at http://localhost:${port}`)
  }))
  .catch((err) => console.log(err.message))
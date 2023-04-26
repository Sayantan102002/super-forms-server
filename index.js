const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes.js')
const formRoutes = require('./routes/form.routes.js');
const questionRoutes = require('./routes/question.routes.js')
const optionRoutes = require('./routes/option.routes.js')
const sharedRoutes = require('./routes/shared.routes.js')
const notificationRoutes = require('./routes/notification.routes.js')


const port = process.env.PORT || 5000
var cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))



// Routes ================================================================
app.get('/', (req, res) => {
  res.send("This is a superforms")

})
app.use('/user', userRoutes)
app.use('/form', formRoutes)
app.use('/form/question', questionRoutes)
app.use('/form/question/option', optionRoutes)
app.use('/form/share', sharedRoutes)
app.use('/notification', notificationRoutes)
//========================================================================


//DB Connection =========================================================
const database_url = "mongodb+srv://ssscgm:T3qsVrrvpQ8UYzgr@cluster0.tlhwxxy.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  app.listen(port, () => {
    console.log(`superforms app is listening at http://localhost:${port}`)
  }))
  .catch((err) => console.log(err.message))
//=======================================================================
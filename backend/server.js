const express = require('express');
const { notFound, errorHandler } = require("./Middlewares/Errorhandling");
const userRoutes = require('./Routes/UserRoutes');
const connectDB = require('./Config/Db');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
connectDB();
const app = express();
//----------------------------------------------------------------deployment------------------------------------------------
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

//----------------------------------------------------------------deployment------------------------------------------------

app.use(express.json()); 
app.listen(process.env.PORT, console.log('server started on 5000'));
app.get('/', (req, res) => {
    res.send('Welcome');
})
app.use('/api', userRoutes);

app.use(notFound);
app.use(errorHandler);


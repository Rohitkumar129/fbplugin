const express = require('express');
const { notFound, errorHandler } = require("./Middlewares/Errorhandling");
const userRoutes = require('./Routes/UserRoutes');
const connectDB = require('./Config/Db');
const dotenv = require('dotenv');

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); 
app.listen(process.env.PORT, console.log('server started on 5000'));
app.get('/', (req, res) => {
    res.send('Welcome');
})
app.use('/api', userRoutes);

app.use(notFound);
app.use(errorHandler);


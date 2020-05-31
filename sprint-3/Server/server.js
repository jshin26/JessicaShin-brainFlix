const express = require('express');
const app = express();
const cors = require('cors');
const videoRoutes = require('./routes/videoRoutes');

const port = process.env.PORT || 8080;

app.use((req, res, next) => {
    console.log('Request: ', req.path, Date.now());
    next();
})

app.use(express.json());

app.use(express.static('assets'));

app.use(cors());

app.use('/', videoRoutes);

app.listen(port, () => console.log(`Server started at ${port}`));
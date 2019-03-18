const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/route');
var bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//middleware
app.use(express.static(path.join(__dirname,'../demo/dist')));
app.use('/api/', routes);

//static file
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname,'../demo/dist/index.html'));
});

app.listen(3000, function () {
  console.log('Server is running with port 3000');
});

const express = require('express');
const app = express();

//middlewares
//serve static files via public folder
app.use(express.static('./public'));

//start app
app.listen(3000)
console.log('server running!')
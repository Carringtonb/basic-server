'use strict'

// require brings in an express library - still need to install it in terminal.

const express = require('express');
const app = express()
 
 require('dotenv').config();

const PORT = process.env.PORT || 3001;


// tells express to serve files from the public file.
app.use(express.static('./public'));

// app.get('/', function (req, res) {
//   res.send('Hi')
// })
 
// app.get('/bananas', (request, response)=> {
//     response.send('I love bananas');
// })

app.listen(PORT, () => console.log(`listening on ${PORT}`));
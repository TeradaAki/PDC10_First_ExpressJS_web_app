const express = require('express');
const app = express();
app.get('/quotes', (request, response) => {
 response.send('The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela');
});
app.listen(8080, 'localhost');
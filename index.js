const express = require ('express');
const app = express();

app.get('/products', (req, res) => {
    res.send('lista de productos')
}) 


app.listen(3000, () => console.log("Server Listener"));
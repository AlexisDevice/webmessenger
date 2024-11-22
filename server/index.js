import express from "express";

const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hola Mundo!</h1>');
});


app.listen(port, () => {
    console.log('Server live: ' + port);
});

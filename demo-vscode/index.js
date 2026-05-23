const express = require('express');
const app = express();  
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('hello, world');
});
app.listen (port, () => {
console.log(`server is running at http://Localhost:${port}`);
});

// creacion del crud

let Especialidad = [
    {id: 1, titulo: `Medico general`},
    {id: 2, titulo: `Medico optometra`},
    {id: 3, titulo: `Medico otorriinolaringolo`},
];


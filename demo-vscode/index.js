const express from 'express';
const app = express();  
const port = 3000;

app.use(express.json());
app.listen (port, () => {
console.log('server is running at http://Localhost:${port}');
app.get('/', (req, res) => {
    res.send('hello, world');






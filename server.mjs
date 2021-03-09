import express from 'express'
import morgan from 'morgan'
import path from 'path'
import campsiteRouter from './routes/campsiteRouter.mjs'
import promotionRouter from './routes/promotionRouter.mjs';
import partnerRouter from './routes/partnerRouter.mjs'

const hostname = 'localhost';
const port = 3000;

const app = express()
app.use(morgan('dev'))

let a = path.resolve();
app.use(express.static( a + '/public'));

app.use(express.json())

app.use('/campsites', campsiteRouter);
app.use('/promotions',promotionRouter)
app.use('/partners', partnerRouter)

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
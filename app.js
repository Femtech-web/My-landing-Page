import  express  from 'express'; 
import bodyParser from 'body-parser';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile( __dirname + "/index.html")
})

app.get('/index.html', (req, res) => {
    res.sendFile( __dirname + "/index.html")
})

app.get('/about.html', (req, res) => {
    res.sendFile( __dirname + "/about.html")
})

app.get('/services.html', (req, res) => {
    res.sendFile( __dirname + "/services.html")
})

app.get('/contact.html', (req, res) => {
    res.sendFile( __dirname + "/contact.html")
})


// app.post('/example', (req, res) => {
//     console.log(req.body)
// })

app.post('/bookings', (req, res) => {
    console.log(req.body)
})

app.post('/bookings2', (req, res) => {
    console.log(req.body)

    res.sendFile(__dirname + "/booking.html")
})

app.post('/home', (req, res) => {
    res.redirect('/index.html')
})

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server is running on port 3000')
})
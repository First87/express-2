const express = require('express');
const app = express();

const  restaurantsRouter = require('./routes/restaurants');



// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

// custom Middleware



// Router
app.use('/apis/restaurants', restaurantsRouter);

app.get('/', (req, res) =>{
 res.send('<h1>Express</h1>')
})

app.listen(3000, () =>{
 console.log('Listening to port 3000')
});
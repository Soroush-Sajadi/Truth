import express from 'express';
const route = express.Router();

 route.get('/', (req, res) => {
    res.send('Lets be honest')
})

export default route;
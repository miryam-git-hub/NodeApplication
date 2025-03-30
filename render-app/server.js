

const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    console.log("check console");
    
    console.log(process.env.RENDER_API_KEY);

    res.send('hello world!')
});
console.log('Token:1', process.env.RENDER_API_KEY);

app.get('/services', async (req, res) => {
    try {
        console.log('Token:2', process.env.RENDER_API_KEY);

        const response = await axios.get('https://api.render.com/v1/services?limit=20', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.RENDER_API_KEY}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(error.response ? error.response.status : 500).json({ message: 'Error fetching services' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

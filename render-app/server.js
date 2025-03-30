




const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const renderApiKey = 'rnd_tHKPhbHuNTrLEg5UXch4rmvTTfRu';  



app.get('/', async (req, res) => {
    try {
        console.log('Token:2', renderApiKey);

        const response = await axios.get('https://api.render.com/v1/services?limit=20', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${renderApiKey}`
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

// const express = require('express');
// const axios = require('axios');
// const app = express();
// const port = process.env.PORT || 3000;

// API Key של Render
// const renderApiKey = 'rnd_tHKPhbHuNTrLEg5UXch4rmvTTfRu';  // החלף בזה את ה-API Key שלך
// app.get('/', (req, res) => {
//     res.send('Hello World!');  // או כל תוכן אחר שתרצי
// });

// app.get('/', async (req, res) => {
//     try {
//         const response = await axios.get('https://api.render.com/v1/services', {
//             headers: {
//                 Authorization: `Bearer ${process.env.RENDER_API_KEY}`,
//             },
//         });
//         res.json(response.data);  // מחזיר את רשימת האפליקציות ב-JSON
//     } catch (error) {
//         res.status(500).send('Error fetching apps: ' + error.message);
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });



const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const renderApiKey = 'rnd_tHKPhbHuNTrLEg5UXch4rmvTTfRu';  // החלף בזה את ה-API Key שלך

// app.get('/',(req,res)=>{
//     console.log("check console");
    
//     console.log(process.env.RENDER_API_KEY);

//     res.send('hello world!')
// });
// console.log('Token:1', process.env.RENDER_API_KEY);

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

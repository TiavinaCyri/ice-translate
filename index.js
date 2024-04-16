const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/translate', async (req, res) => {
    try {
        const response = await fetch('https://api-b2b.backenster.com/b1/api/v3/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer a_25rccaCYcBC9ARqMODx2BV2M0wNZgDCEl3jryYSgYZtF1a702PVi4sxqi2AmZWyCcw4x209VXnCYwesx'
            },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();

        res.json(data.result);
    } catch (error) {
        console.error('Erreur lors de la requête :', error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la requête.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
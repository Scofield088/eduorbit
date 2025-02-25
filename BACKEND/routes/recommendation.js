const express = require('express');
const axios = require('axios'); // For making HTTP requests
const router = express.Router();

router.get('/recommendations', async (req, res) => {
    const userId = req.query.user_id;

    try {
        const response = await axios.get(`http://localhost:5001/recommendations`, {
            params: { user_id: userId },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        res.status(500).send('Failed to fetch recommendations');
    }
});

module.exports = router;

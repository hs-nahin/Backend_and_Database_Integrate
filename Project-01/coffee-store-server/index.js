const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
// Enable Cross-Origin Resource Sharing for all routes
app.use(cors());

// Parse incoming JSON requests and put the parsed data in req.body
app.use(express.json());


// Define the root route
app.get('/', (req, res) => {
    res.send('Coffee Store Server...');
});
// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Coffee Store Server is running at Port: ${port}`);
});
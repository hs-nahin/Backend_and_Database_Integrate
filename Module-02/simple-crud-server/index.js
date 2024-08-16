const express = require("express"); // Importing the Express framework
const cors = require("cors"); // Importing the CORS middleware to enable Cross-Origin Resource Sharing
const app = express(); // Creating an Express application
const port = process.env.PORT || 5000; // Setting the port for the server, using an environment variable if available, or defaulting to 5000

// Middlewares
app.use(cors()); // Using the CORS middleware to allow requests from different origins
app.use(express.json()); // Using the express.json() middleware to parse incoming JSON requests

// ------------------------------------------------------------------------------
// MongoDB client setup
const { MongoClient, ServerApiVersion } = require('mongodb'); // Importing MongoClient and ServerApiVersion from the MongoDB library
const uri = "mongodb+srv://hs_nahin:<password>@cluster0.cvmgo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // MongoDB connection string

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect(); // Establishing connection to the MongoDB server
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 }); // Pinging the MongoDB server to verify the connection
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close(); // Closing the MongoDB client connection
  }
}
run().catch(console.dir); // Running the async function and handling any errors
// ------------------------------------------------------------------------------


// Route to handle the root URL
app.get("/", (req, res) => {
  res.send("Simple CRUD is running..."); // Handling GET requests to the root URL ('/') and sending a response
});

// Starting the server
app.listen(port, () => {
  console.log(`Simple CRUD is running on port ${port}`); // Starting the server and logging the port it's running on
});

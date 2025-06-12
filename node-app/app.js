const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// MongoDB connection URI and settings
const uri = "mongodb+srv://alamshaha:ZUMaGdXpQVH0Flqa@cluster0.kkwyrkb.mongodb.net/clusters?retryWrites=true&w=majority&appName=Cluster0";
// const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const cors = require('cors');

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3001', // Allow only your frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // If you're using cookies or HTTP authentication
}));

// Connect to MongoDB once and reuse the connection
let db;
client
  .connect()
  .then(() => {
    db = client.db("schools"); // Replace with your database name
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// POST /api/users — Insert user into MongoDB
app.post("/api/users", async (req, res) => {
  try {
    const user = req.body; // Expecting JSON body   
    const result = await db.collection("students").insertOne(user);
    res.status(201).json({ insertedId: result.insertedId });
  } catch (err) {
    console.error("Insert error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/api/getUsers", async (req, res) => {
  try {
    const users = await db.collection("students").find().toArray(); // ← important
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

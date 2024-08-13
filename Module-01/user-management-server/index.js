const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "Nahin", email: "nahin@email.com" },
  { id: 2, name: "Mim", email: "mim@email.com" },
  { id: 3, name: "Urmi", email: "urmi@email.com" },
  { id: 4, name: "Urbi", email: "urbi@email.com" },
];

app.get("/users", (req, res) => {
    res.send(users)
})

app.get("/", (req, res) => {
  res.send("User management server is running");
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});

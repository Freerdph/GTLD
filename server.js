const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let items = [
    { id: 1, name: "Dirt", type: "block" },
    { id: 2, name: "CustomSeed", type: "seed" }
];

app.get("/", (req, res) => res.send("Freerdph GTPS Server running!"));
app.get("/items", (req, res) => res.json(items));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

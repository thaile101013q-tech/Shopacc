const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let data = require("./data.json");

// GET PRODUCTS
app.get("/api/products", (req, res) => {
    res.json(data.products);
});

// ADD PRODUCT
app.post("/api/add", (req, res) => {
    data.products.push(req.body);
    fs.writeFileSync("data.json", JSON.stringify(data));
    res.send("OK");
});

// LOGIN
app.post("/api/login", (req, res) => {
    const {user, pass} = req.body;
    if(user === "admin" && pass === "123"){
        res.json({success:true});
    } else {
        res.json({success:false});
    }
});

app.listen(3000, () => console.log("Server chạy http://localhost:3000"));

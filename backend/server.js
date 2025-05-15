import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("this is GET method")
})

app.listen(5001, () =>{
    console.log("Server is running on port 5001");
    
})
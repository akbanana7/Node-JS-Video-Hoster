const express = require("express")
const app = express()
const path = require("path")
const port = 8080

app.use(express.static(path.join(__dirname, "static"))); // Serve html/css/js (static)

app.get("/", (req, res) => {
  res.send('Hello World!')
})




app.listen(port, () => { // Start running server
  console.log("Server listening on port 8080")
})
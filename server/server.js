const express = require("express");
const cors = require("cors")

const PORT = 5000;

//initilize the server
const app = express();
app.use(cors());
//parsing applicaiton and json
app.use(express.json());

// app.get("/", () => {
//     console.log("GET has been called");
// });

function getTickets() {
    return null
}

function createTicket() {
    return null
}

function updateTicket() {
    return null
}

function closeTicket() {
    return null
}

/**
 * Testing
 */
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
})

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});

function main() {
    return null;
}

if(require.main === module) {
    main();
}
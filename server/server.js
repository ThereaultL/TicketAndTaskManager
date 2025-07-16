const express = require("express");
const cors = require("cors")

const PORT = 5000;

let tickets = [];

//initilize the server
const app = express();
app.use(cors());
//parsing applicaiton and json
app.use(express.json());

/**
 * Gets the list of open tickets
 */
app.get("/", (req, res) => {
    res.json(tickets);
});

/**
 * Creates a tickets based on the request body and pushes the new ticket onto the list of 
 * open tickets
 */
app.post("/TicketForm", (req, res) => {
    // const title = req.body.title;
    //const description = req.body.title;
    const {title, description} = req.body; //parsed body from the request
    let newTicket = {
        id : tickets.length + 1,
        title,
        description,
        status : "Open"
    };
    tickets.push(newTicket);
    console.log(`Ticket Created: ${title}, ${description}`);
    //201 HTTP code : Created POST
    res.status(201).json(newTicket);
});

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
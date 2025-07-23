const express = require("express");
const cors = require("cors")

const PORT = 5000;

let tickets = []; //list on existing tickets (non-closed status)

const app = express(); //initilize the server
app.use(cors());
app.use(express.json()); //parsing applicaiton and json

/**
 * Gets the list of open tickets
 */
app.get("/List", (req, res) => {
    res.json(tickets);
});

/**
 * Creates a tickets based on the request body and pushes the new ticket onto the list of 
 * open tickets
 */
app.post("/TicketForm", (req, res) => {
    //const title = req.body.title;
    //const description = req.body.title;
    const {title, description} = req.body; //parsed body from the request, shortend
    let newTicket = {
        id : tickets.length,
        title : title,
        description : description,
        status : "Open"
    };
    tickets.push(newTicket);
    console.log(`Ticket Created: ${title}, ${description}`);
    //201 HTTP code : Created POST
    res.status(201).json(newTicket);
});

/**
 * Update the properties of an existing ticket
 */
//app.post("");

/**
 * Close a ticket by removing the ticket from list
 */
//app.delete("");

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
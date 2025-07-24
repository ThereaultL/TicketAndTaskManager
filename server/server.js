const express = require("express");
const cors = require("cors")

const PORT = 5000;

const app = express(); //initilize the server
app.use(cors());
app.use(express.json()); //parsing applicaiton and json

/** Global Variable */
let tickets = []; //list on existing tickets (non-closed status)
let idStorage = []; //list of existing ticket IDs to prevent duplicates


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
        id : idStorage.length,
        title : title,
        description : description,
        status : "Open"
    };
    tickets.push(newTicket);
    console.log(`Ticket Created: ${title}, ${description}`);
    res.status(201).json(newTicket); //201 HTTP code : Created POST
});

/**
 * Update the properties of an existing ticket
 */
app.post("/Update", (req, res) => {
    let ticket = req.body;
    i = tickets.findIndex(t => t.id === ticket.id);
    if (i > -1) {
        //ID is not a changeable property
        tickets[i].title = ticket.title;
        tickets[i].description = ticket.description;
        tickets[i].status = ticket.status;
        res.status(200).json(tickets[i]); //200 HTTP code : OK
    } else {
        res.status(404).json({ message: "Ticket not found" }); //404 HTTP code : Not Found
    }
});

/**
 * Close a ticket by removing the ticket from list
 */
app.delete("/resolve", (req, res) => {
    let ticket = req.body;
    ticket.status = "Resolved";
    i = tickets.findIndex(t => t.id === ticket.id);
    if (i > -1) {
        tickets.splice(i, 1); // Remove the ticket from the list
        res.status(200).json({ message: "Ticket resolved successfully" }); //200 HTTP code : OK
    } else {
        res.status(404).json({ message: "Ticket not found" }); //404 HTTP code : Not Found
    }

});

/**
 * Testing communication between client and server
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
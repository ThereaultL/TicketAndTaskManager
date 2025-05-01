from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#Global Variables - Ticket Storage
tickets = []
ticket_id_counter = tickets.length()

@app.route("/", methods=["GET"])
def get_tickets():
    return

@app.route("/TicketForm", methods=["POST"])
def create_ticket():
    submitted = request.get_json()
    ticket = {
        "id" : ticket_id_counter+1,
        "title" : submitted["title"],
        "description" : submitted["description"],
        "status" : "Open"
    }
    tickets.append(ticket);
    return jsonify(ticket);

@app.route("/", methods=["PUT"])
def update_ticket(ids):
    """
    Updates the ticket information specified by getting the ticket based on the id
    and setting the old ticket to the updated version
    Parameters
    ----------
    id : int
        The ticket id number.
    """
    tickets[id] = ticket_info

@app.route("/", methods=["DELETE"])
def delete_ticket(id):
    """
    Updates the ticket information specified by getting the ticket based on the id
    and setting the old ticket to the updated version
    Parameters
    ----------
    id : int
        The ticket id number.
    """
    tickets[id].remove


def main():
    return

if __name__ == "__main__":
    main()
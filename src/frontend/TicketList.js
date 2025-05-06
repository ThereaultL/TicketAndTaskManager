import './TicketList.css';
import TicketSummary from './TicketSummary';

function TicketList() {
  const [tickets, setTickets] = useState([]);

  const listTickets = tickets.map(index => {
    <TicketSummary id={index} title={tickets[index].title} />
  });

    useEffect(() => {
        const fetchTickets = async () => {
        const response = await fetch("http://localhost:3000/");
        const data = await response.json();
        setTickets(data);
        };
        fetchTickets();
    }, []);

  return (
    <div>
      <div class="info-bar">

        <div class="left-info-bar">
          <p>Summary</p>
        </div>
        <div class="right-info-bar">
          <p>Status</p>
          <p>View More</p>
        </div>
      </div>

      {listTickets}
      
    </div>
  );
}

export default TicketList;

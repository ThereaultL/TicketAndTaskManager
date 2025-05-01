import './TicketList.css';
import TicketSummary from './TicketSummary';

function TicketList() {
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

      <TicketSummary/>
      
    </div>
  );
}

export default TicketList;

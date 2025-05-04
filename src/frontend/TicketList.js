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
          <p>Priority</p>
          <p>Status</p>
          <p class ="info-box">View More</p>
        </div>
      </div>

      <TicketSummary/>
      
    </div>
  );
}

export default TicketList;

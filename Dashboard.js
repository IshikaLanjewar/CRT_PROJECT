import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Customer Dashboard</h1>

      <div className="dashboard-grid">

        <div className="dash-card">
          <h2>3</h2>
          <p>Active Orders</p>
        </div>

        <div className="dash-card">
          <h2>VIP</h2>
          <p>Membership Plan</p>
        </div>

        <div className="dash-card">
          <h2>5</h2>
          <p>Completed Orders</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
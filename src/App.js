import { Routes, Route } from "react-router-dom";
import "./index.css"
import Home from "./routes/Home"
import Booking from "./routes/Booking"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookTickets/:id/:name" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;

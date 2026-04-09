import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/MainLayout.tsx";
import Dashboard from "./components/Dashboard.tsx";
import LoginPage from "./components/LoginPage.tsx";

function App() {
  return (
    <>
      {/* <LoginPage /> */}
      <BrowserRouter>
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="daily-tasks" element={<div>Daily Tasks</div>} />
            <Route path="projects" element={<div>Projects</div>} />
            <Route path="leaves" element={<div>Leaves</div>} />
            <Route path="leave-comp" element={<div>Leave Compensation</div>} />
            <Route path="wfh" element={<div>Work From Home</div>} />
            <Route path="time-entry" element={<div>Time Entry</div>} />
            <Route path="venue-booking" element={<div>Venue Booking</div>} />
            <Route path="holiday" element={<div>Holiday</div>} />
            <Route path="policies" element={<div>Policies</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

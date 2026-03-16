import { BrowserRouter as Router } from "react-router-dom";
import "./App.css"
import MainLayout from "./components/MainLayout.tsx";

function App() {
  return (
    <>
      <Router>
        <MainLayout/>
      </Router>
    </>
  );
}

export default App;

import './App.css';
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav />
    </Router>
  )
};

export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./Components/Home"
import Projects from "./Components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" basename={process.env.PUBLIC_URL}>
       <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="Projects" element={<Projects/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;

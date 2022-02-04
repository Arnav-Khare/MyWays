import './App.css';
import { HomePage } from './container/HomePage';
import {User} from './container/Login'
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
    <>
         <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              {isAuthenticated && <Route exact path="/user" element={<User />} /> }
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Dashboard3 from './components/Dashboard3';
import Dashboard4 from './components/Dashboard4';
import NavBar from './components/NavBar';
import './App.css'; // Garde ça si t'as du style dedans

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard1 />} />
            <Route path="/dashboard2" element={<Dashboard2 />} />
            <Route path="/dashboard3" element={<Dashboard3 />} />
            <Route path="/dashboard4" element={<Dashboard4 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
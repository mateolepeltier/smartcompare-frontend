import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import './App.css'; // Garde ça si t'as du style dedans

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard1 />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
      </Routes>
    </Router>
  );
}

export default App;
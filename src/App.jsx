import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register'; // Similar to Login
import Matches from './pages/Matches';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Favorites from './pages/Favorites';
function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-wrapper bg-black min-vh-100 text-white">
          <Navigation />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Matches />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
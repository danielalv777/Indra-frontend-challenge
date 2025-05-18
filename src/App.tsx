// Libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './shared/components/header';
import { Home } from './features/home/pages/home';
import { SecurePlans } from './features/salud-flexible/pages/securePlans';

// Styles
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planes" element={<SecurePlans />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

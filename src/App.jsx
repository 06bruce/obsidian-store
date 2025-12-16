import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Scene from './components/canvas/Scene';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import SmoothScroll from './components/ui/SmoothScroll';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="relative w-full min-h-screen bg-primary">
          <Navbar />
          <Scene />
          <div className="relative z-10">
            <AnimatedRoutes />
          </div>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;

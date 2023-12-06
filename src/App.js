import { 
  BrowserRouter, 
  Routes, 
   Route 
} from 'react-router-dom';
import About from './components/about/About';
import Setting from './components/setting/Setting';
import Home from './pages/home/Home';
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Setting />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;

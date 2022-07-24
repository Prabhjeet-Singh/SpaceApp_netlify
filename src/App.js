import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './compnents/pages/Home/Home'
import Destination from './compnents/pages/Destination/Destination'
import Crew from './compnents/pages/Crew/Crew'
import Technology from './compnents/pages/Technology/Technology'


function App() {
  return (
    <>
     <Router>
      <Routes>
      <Route path='/' exact element={<Home/>}></Route>
      <Route path='/Destination' exact element={<Destination/>}></Route>
      <Route path='/Crew' exact element={<Crew/>}></Route>
      <Route path='/Technology' exact element={<Technology/>}></Route>
      </Routes>
     </Router>
     {/* 870 line css 
      315 line react js */}
    </>
  );
}

export default App;

import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import About from './pages/about/About';
import {Person} from '@material-ui/icons';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

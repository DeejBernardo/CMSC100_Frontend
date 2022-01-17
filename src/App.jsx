import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import About from './pages/about/About';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const currentUserId = 4;

  return (
    <div>
      <Router>
        <Sidebar currentUserId={currentUserId}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile/:username' element={<Profile currentUserId={currentUserId}/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

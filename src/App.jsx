import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import About from './pages/about/About';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Users } from './DummyData';


export function getCurrentId() {

  const currentUserId = 2;
  return currentUserId;

}

function App() {

  const currentUserId = getCurrentId();

  return (

    <div>
      <Router>
        <Sidebar currentUserId={currentUserId}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          {
            Users.map((p) => (
              <Route path= {'/profile/' + p.username} component={Users} element={<Profile currentUserId={p.id}/>} />
                  ))
          }
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

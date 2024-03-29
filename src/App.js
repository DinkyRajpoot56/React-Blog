import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
    <TopBar />
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route path="/register" element={user ? <Home/> :<Register />}></Route>
    <Route path="/login" element={user ? <Home/> :<Login />}></Route>
    <Route path="/write" element={user ? <Home/> :<Write />}></Route>
    <Route path="/settings" element={user ? <Home/> :<Settings />}></Route>
    <Route path="/post/:postId">
      <Single />
    </Route>
     
    </Routes>
    </Router>
  );
}

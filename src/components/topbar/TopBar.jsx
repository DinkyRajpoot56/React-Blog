import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">
          <Link className="link"to="/" style={{textDecoration:"none", color:"inherit"}} >HOME</Link>
        </li>
        <li className="topListItem"><Link className="link"to="/" style={{textDecoration:"none", color:"inherit"}} >ABOUT</Link></li>
        <li className="topListItem"><Link className="link"to="/" style={{textDecoration:"none", color:"inherit"}} >CONTACT</Link></li>
        <li className="topListItem"><Link className="link"to="/" style={{textDecoration:"none", color:"inherit"}} >WRITE</Link></li>
        <li className="topListItem">
          {user && "LOGOUT"}
        </li>
      </ul>
      </div>
      <div className="topRight">
          {
          user ? (
            <img 
            className="topImg" 
            src="https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg?w=2000"
            alt=""
             />
          ) :(
            <ul className='topListItem'>
              
              <li className="topListItem">
            <Link className="link" to="/login">
              LOGIN
              </Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/register">
              REGISTER
              </Link>
            </li>
            </ul>
          );
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

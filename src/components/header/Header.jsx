import "./header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg"
        src="https://wallpaperaccess.com/full/360424.jpg" height="1000px" width="1210px"
        alt=""
        />
    </div>
  );
}

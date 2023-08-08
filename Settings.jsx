import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your Account</span>
            <span className="settingsDeleteTitle">Delete your Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="https://media.istockphoto.com/id/1328564799/photo/milky-way-over-snowy-mountains-and-lake-at-night-landscape-with-snow-covered-high-rocks.jpg?s=612x612&w=0&k=20&c=u-hOHF9zVKc_gPcr3fn__seFKWJ8ft9WIS7NgUC5p2o=" height="300px" width="700px" alt="" />
              <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Safak" />
            <label>Email</label>
            <input type="email" placeholder="dinky487@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}

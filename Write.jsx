import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img
        className="writeImg" src="https://media.istockphoto.com/id/153070532/photo/home-at-christmas.jpg?s=612x612&w=0&k=20&c=-P2vnnewzX-PuDjmbwHF8PRUPvYgc8c9T2av217F8mc="  alt=""/>
       <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
        </div>
        <buttom className="writeSubmit">Publish</buttom>
       </form>
    </div>
  )
}

import { useState } from "react";
import { submitBlog } from "../../apiCall/internal";
import { useSelector } from "react-redux";
import styles from './submitBlog.module.css'
import Textinput from "../../Components/TesxtInput/TextInput";
import { useNavigate } from "react-router-dom";

function SubmitBlog(){
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [photo, setPhoto] = useState('');
    let formData = new FormData();
    const author = useSelector(state => state.userSlice._id);
    const getPhoto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPhoto(reader.result);
        }
    }
    const submitHandler = async () => {
        const data = {
          author,
          title,
          content,
          photo,
        };
        formData.append('author', author);   //append the values with key, value pair
        formData.append('title', title);
        formData.append('content', content);
        formData.append('photo', photo);
        const response = await submitBlog(formData);
    
        if (response.status === 201) {
          navigate("/");
        }
      };
    
    return(
        <div className={styles.wrapper}>
      <div className={styles.header}>Create a blog!</div>
      <Textinput
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "60%" }}
      />
      <textarea
        className={styles.content}
        placeholder="your content goes here..."
        maxLength={400}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className={styles.photoPrompt}>
        <p>Choose a photo</p>
        <input
          type="file"
          name="photo"
          id="photo"
          accept="image/jpg, image/jpeg, image/png"
          onChange={getPhoto}
        />
        {photo !== "" ? <img src={photo} width={150} height={150} /> : ""}
      </div>
      <button
        className={styles.submit}
        onClick={submitHandler}
        disabled={title === "" || content === ""}
      >
        Submit
      </button>
    </div>
    )

}

export default SubmitBlog;
import { useState, useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import { getAllBlogs } from "../../apiCall/internal";
import styles from './Blog.module.css';

function Blog(){
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        getAllBlogsApiCall();
        setBlogs([]);
    }, []);

    async function getAllBlogsApiCall(){
        const response = await getAllBlogs();
        if (response.status === 200){
            setBlogs(response.data.blogs);
        }
    }

    if (blogs.length === 0) {
        return <Loader text='blogs'/>
    }

    return (
        <div className={styles.blogsWrapper}>
            {blogs.map((blog) => (
                <div id={blog._id} className={styles.blog}>
                    <h1>{blog.title}</h1>
                    <img src={blog.photo}></img>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Blog;

import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = ({handleBookmark,handleRead}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('knowledge.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="flex gap-8 container mx-auto">
            <div className="flex-1">
            {
            blogs.map(blogs=><Blog handleBookmark={handleBookmark} blog={blogs} handleRead={handleRead}></Blog>)
            }
            </div>
           
        </div>
    );
};

export default Blogs;
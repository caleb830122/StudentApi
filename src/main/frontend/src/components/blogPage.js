import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    // const fetchAllPosts = () => {
    //     axios.get(`http://localhost:8082/posts`).then((res) => {
    //         console.log(res);
    //         // set userProfile state object with response data
    //     });
    // };
    const getPosts = () => {
        axios.get(`http://localhost:8082/posts`).then((res) => {
            console.log(res);
            setPosts(res.data);
            // set userProfile state object with response data
        });
    };
    // useEffect(() => {
    // axios.get(`http://localhost:8082/posts`).then((res) => {
    //     console.log(res);
    //     setPosts(res.data);
    //     // set userProfile state object with response data
    // });
    // });
    return (
        <div>
            <button onClick={getPosts}>Get posts</button>
            <div className="blog">
                {posts.map((key, val) => {
                    return (
                        <div className="Post" key={key}>
                            <h1>{val.title}</h1>
                            <p>
                                m, ahdfkJADDFHKAK.SDJFALKSJDFLKSJADFLJSDLFKSFJ
                            </p>
                            <h4> Pedro Tech </h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BlogPage;

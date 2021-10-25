import React, {FunctionComponent, useEffect, useState} from 'react';
import axios from "axios";
import UsersTable from "./UsersTable"

type Post = {
    id: number,
    title: string,
    body: string
}

const UserPosts: FunctionComponent = (user) => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        axios.get(url)
            .then(response => setPosts(response.data));
    }, []);

    return (
      <div>
        {posts.map(post => <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
      </div>)}
      </div>

    )
}

export default UserPosts;

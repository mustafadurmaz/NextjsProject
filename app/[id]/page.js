import React from 'react'

const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json();
}

const Page = async ({ params }) => {
    const data = await fetchPosts();
    console.log(data);
    console.log(params.id);
    return (
        <div>page.....</div>
    )
}

export default Page

export async function generateStaticParams(){
    const posts=await fetchPosts();
    return posts.map(post =>({id:post.id}))
}
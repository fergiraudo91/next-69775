import Button from '@/app/components/Button';
import Link from 'next/link';
import React from 'react'

const getPostById = async (id) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return result.json();
}

const Post = async ({params}) => {
    const {id} = params;
    const post = await getPostById(id);
  return (
    <div className='container mx-auto'>
        <h1 className='text-lg font-bold mb-3'>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={'/'}><Button className='px-3 mt-3'>Volver</Button></Link>
    </div>
  )
}

export default Post
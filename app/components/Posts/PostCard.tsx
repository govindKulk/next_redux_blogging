import { Post, increaseLikeAndStoreINBackend, postSlice, useDispatch } from '@/lib/redux'
import Link from 'next/link';
import React from 'react'

const PostCard = ({postData}: {postData: Post}) => {
    const {title, content, author, post_id, likes} = postData;
    const dispatch = useDispatch();
  return (
    <div className='border border-gray-200 py-4 px-2 shadow text-lg'>
      <h3 className='py-2 font-semibold capitalize text-xl'><span className='font-bold text-xl'>Title: </span><Link href={`posts/${post_id}`}>{title}</Link></h3>
      <span><span className='font-bold text-xl'>Author: </span>{author}</span>
      <p><span className='font-bold text-xl'>Content: </span>{content.split(' ').slice(0, 10).join(' ')}</p>

      <span className='text-blue-500 font-bold cursor-pointer' onClick={() => {dispatch(increaseLikeAndStoreINBackend(post_id))}} > Likes: {likes} </span>
    </div>
  )
}

export default PostCard

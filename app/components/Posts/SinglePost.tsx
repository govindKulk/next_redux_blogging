"use client"

import EditPage from '@/app/posts/edit/page';
import { Post, selectSinglePost, useSelector } from '@/lib/redux'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import EditPost from './EditPost';

const SinglePostSection = () => {

    const {id} = useParams()
    const post = useSelector(state => selectSinglePost(state, Number(id[0] ?? 1)))

    if(!post){
        return <div>No Post Found</div>
    }
    const {title, author, content} = post;
    const [showEdit, setShowEdit] = useState(false);

    if(showEdit){
        return (
            <EditPost post={post}/>
        )   
    }

    return (
        <div className='border border-gray-200 my-4 shadow text-lg max-w-screen-lg mx-auto px-8 py-8 flex flex-col gap-2'>
        <h3 className='py-2 font-semibold capitalize text-xl'><span className='font-bold text-xl'>Title: </span>{title}</h3>
        <span><span className='font-bold text-xl'>Author: </span>{author}</span>
        <p><span className='font-bold text-xl'>Content: </span>{content}</p>
        <span onClick={() => setShowEdit(true)}  className='bg-blue-500 text-white text-lg font-bold p-2 shadow cursor-pointer self-start'>Edit Post</span>
      </div>
    )
}

export default SinglePostSection

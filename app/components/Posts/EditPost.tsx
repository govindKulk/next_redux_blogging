"use client"

import { Post, useSelector, useDispatch, updatePost } from '@/lib/redux'
import React, { useState } from 'react'
import SinglePostSection from './SinglePost';


const EditPost = ({
    post
}: { post: Post }) => {
    const { author, content, title, postStatus, post_id } = post;
    const [showPost, setShowPost] = useState(false)
    const dispatch = useDispatch();
    const [postData, setPostData] = useState<Partial<Post>>({
        title,
        content,
        author
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPostData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    if(showPost){
        return (
            <SinglePostSection/>
        )
    }

    const handleSave = async ( ) => {
        try{
            await dispatch(updatePost({...postData, post_id})).unwrap();

        }catch(err){
            console.log(err)
        }finally{
            setShowPost(true)
        }
    }
    return (
        <div className='border border-gray-200 my-4 shadow text-lg max-w-screen-lg mx-auto px-8 py-8 flex flex-col gap-2'>
            <input type="text" value={postData.title} className='border border-gray-500 px-2 py-2 font-semibold capitalize text-xl'
                name="title" onChange={(e) => handleInputChange(e)}
            />

            <input type="text" value={postData.author} className='font-bold text-xl border border-gray-500 py-2 px-2'
                name="author" onChange={(e) => handleInputChange(e)}
            />

            <textarea value={postData.content} className='font-bold text-xl border py-4 px-2 border-gray-500'
            name="content" onChange={(e) => handleInputChange(e)}
            />


            <button onClick={handleSave} className='bg-green-500 text-white text-lg font-bold p-2 shadow cursor-pointer self-start' disabled={postStatus && postStatus == 'pending'}>Save Post</button>
        </div>
    )
}

export default EditPost

"use client"

import { getAllPosts, selectAllPosts, useDispatch, useSelector} from '@/lib/redux'
import React, { Suspense, useEffect } from 'react'
import PostCard from './PostCard';

import Loading from './loading';


const PostList = () => {
    
    const dispatch = useDispatch();
    const postStatus = useSelector(state => state.post.status);
    const posts = useSelector(selectAllPosts);
    useEffect(() => {
        if(postStatus === 'idle'){
            dispatch(getAllPosts());
        }
    }, [dispatch, postStatus])

    
  
    return (
    <div className='h-screen  px-8 py-4 grid grid-cols-3 gap-4'>

       { posts.map((posts, i) => <PostCard key={i} postData={posts} />)}

    </div>
  )
}

export default PostList

import { createSlice } from "@reduxjs/toolkit";


const initialState: initialStateType = {
    posts: [],
    status: 'idle',
    error: undefined

}



export  const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        
    }
})


// Types

interface initialStateType {
    posts: Post[],
    status: 'idle' | 'loading' | 'failed',
    error: string | undefined
}

export type Post = {
    post_id: number;
    title: string;
    content: string;
    author: string;
    publish_date: string;
    category: string;
    tags: string;
    likes: number;
    comments: number;
    featured_image: string;
}


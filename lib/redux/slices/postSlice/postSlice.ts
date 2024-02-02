import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { getAllPosts, increaseLikeAndStoreINBackend, updatePost } from "./thunks";


const initialState: initialStateType = {
    posts: [],
    status: 'idle',
    error: undefined

}



export  const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        increaseLikes: {
            // i have intellionally made it complex to explore the prepare callbacks on reducers which returns action payloads which can be used by the state.
            reducer(state, action: PayloadAction<number>) {
                const post_id = action.payload;
                const existingPost = state.posts.find(post => post.post_id === post_id);
                if(existingPost){
                    existingPost.likes++;
                }
            },
            prepare(post_id: number) {
                return {
                    payload: post_id
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllPosts.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(getAllPosts.fulfilled, (state, action) => {
            state.status = 'success';
            state.posts = action.payload;
            
        })
        .addCase(getAllPosts.rejected, (state, action) => {
            state.status = 'failed';
        })
        .addCase(updatePost.pending, (state, action) => {
            let currentPost;
            let {post_id} = action.meta.arg;
            currentPost = state.posts.find(post => post.post_id === post_id);
            if(currentPost){
                currentPost.postStatus = 'pending';
            }

        })
        .addCase(updatePost.fulfilled, (state, action) => {
            let currentPost;
            let {post_id} = action.meta.arg;
            currentPost = state.posts.find(post => post.post_id === post_id);
            if(currentPost){
                
                state.posts = action.payload;
                currentPost = {...currentPost, ...action.meta.arg, postStatus: 'completed'}
                console.log(currentPost)
                
            }
        })
        // not allowed since i wrote it in manually
        // .addCase(increaseLikeAndStoreINBackend.pending, (state,action) => {

        // })
    }
})


// Types

interface initialStateType {
    posts: Post[],
    status: 'idle' | 'loading' | 'failed' | 'success',
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
    postStatus?: 'pending' | 'saved';
}


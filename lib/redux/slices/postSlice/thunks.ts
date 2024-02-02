import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { ReduxThunkAction } from "../../store";
import { Post, postSlice } from "./postSlice";

export const Art_Delay = 2000;


export const getAllPosts = createAppAsyncThunk('posts/fetchAllPosts',
async () => {
    const res = await fetch('http://localhost:3000/api/posts');
    const postData = await res.json();
    console.log(postData)
    return postData.data;
})

export const updatePost = createAppAsyncThunk('posts/modifyPost', async (postData: Partial<Post>) => {
    try{
        const res = await fetch(`http://localhost:3000/api/posts/${postData.post_id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postData)
        })
        const updatedPostsData = await res.json();
        console.log(updatedPostsData);
        return updatedPostsData.data;
       }catch(err){
            console.log(err);
       }
})

export const increaseLikeAndStoreINBackend = (post_id: number): ReduxThunkAction => async (dispatch, getState) => {
   try{
    const res = await fetch(`http://localhost:3000/api/posts/${post_id}`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"}
    })
    dispatch(postSlice.actions.increaseLikes(post_id));
   }catch(err){
        console.log(err);
   }
}
import { ReduxState } from "../..";

export const selectAllPosts = (state: ReduxState) => state.post.posts

export const selectSinglePost = (state: ReduxState, postId: number) => {
    return state.post.posts.find(post => post.post_id === postId);
}
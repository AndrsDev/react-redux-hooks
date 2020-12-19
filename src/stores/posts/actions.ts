import { Post } from 'models/post';
import { RootState } from 'stores';
import {
  ERROR,
  LOADING,
  PostsActionTypes,
  ADD,
} from './types';



export const getPostsByUserId = (uid: number) => async (
  dispatch: (action: PostsActionTypes) => void, 
  getState: () => RootState, // Argument that access the state in case it is needed.
) => {
  dispatch({
    type: LOADING,
  })
  try{
    const response: Response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${uid}`)
    if(!response.ok) throw new Error(`Couldn't fetch posts of user: ${uid}`)

    const posts: Post[] = await response.json();
    dispatch({
      type: ADD,
      payload: {
        id: uid,
        posts: posts,
      }
    })

  } catch (e) {
    dispatch({
      type: ERROR,
      payload: e.message,
    })
  } 
}
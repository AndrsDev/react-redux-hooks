import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "stores";
import { PostsState } from "stores/posts/types";
import { getAllUsers } from 'stores/users/actions';
import { getPostsByUserId } from 'stores/posts/actions';
import { Post } from "models/post";
import Loader from 'components/Loader';

function Posts(props: any) {
  const { items: users, ids: userIds } = useSelector((state: RootState) => ({ 
    items: state.user.items, 
    ids: state.user.itemsIndexById
  }));
  const postsState: PostsState = useSelector((state: RootState) => state.posts);

  const dispatch = useDispatch();
  const uid = parseInt(props.match.params.uid);

  useEffect(() => {
    if(!users.length){
      dispatch(getAllUsers());
    }

    if(!postsState.items.has(uid)){
      dispatch(getPostsByUserId(uid));
    }
  }, [])


  if(postsState.loading){
    return (
      <div className="center">
        <Loader />;
      </div>
    )
  }
  
  if(postsState.error){
    return <h2>{postsState.error}</h2>
  }

  return (
    <>
      <h1>Posts</h1>
      <p>{users[userIds.get(uid)!]?.name}</p>
      {postsState.items.get(uid)?.map((post: Post, index: number) =>     
        <article key={index} className='postContainer'>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      )}

    </>
  );
}

export default Posts;

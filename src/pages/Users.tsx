import { User } from 'models/user';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores';
import { getAll } from 'stores/users/actions';
import { UsersState } from 'stores/users/types';
import Loader from 'components/Loader';
import { Link } from 'react-router-dom';


function Users() {
  const { items, loading, error }: UsersState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!items || items.length === 0){
      dispatch(getAll());
    }
  }, [])

  if(loading){
    return (
      <div className="center">
        <Loader />;
      </div>
    )
  }
  
  if(error){
    return <h2>{error}</h2>
  }

  return (
    <>
      <h1>Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {items.map((user: User, index: number) =>     
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                <Link className="center-vertical" to={`/posts/${index}`} >
                  <div className="eye-solid icon"></div>
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}


export default Users;



// the "connect" way to listen to state updates -----------------
// const mapStateToProps = (state: RootState) => {
//   return {
//     users: state.user.items
//   }
// }

// const mapDispatchToProps = { getAll }

// export default connect(
//   mapStateToProps, 
//   mapDispatchToProps
// )(Users);

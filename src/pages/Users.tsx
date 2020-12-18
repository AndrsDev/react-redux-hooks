import { User } from 'models/user';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores';
import { getAll } from 'stores/users/actions';
import { UsersState } from 'stores/users/types';
import Loader from 'components/Loader';

function Users() {
  const { items, loading, error }: UsersState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch])

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
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Enlace</th>
        </tr>
      </thead>
      <tbody>
        {items.map((user: User, index: number) =>     
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
          </tr>
        )}
      </tbody>
    </table>
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

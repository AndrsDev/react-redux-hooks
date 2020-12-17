import { User } from 'models/user';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores';
import { getAll } from 'stores/users/actions';


function Users() {
  const users: User[] = useSelector((state: RootState) => state.user.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch])


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
        {users.map((user: User, index: number) =>     
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

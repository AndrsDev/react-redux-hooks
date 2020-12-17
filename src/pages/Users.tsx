import { User } from 'models/user';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'stores';
import { getAll } from 'stores/users/actions';


function Users({ users, getAll, ...props}: any) {

  useEffect(() => {
    getAll();
  }, [])

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

const mapStateToProps = (state: RootState) => {
  return {
    users: state.user.items
  }
}

const mapDispatchToProps = { getAll }

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Users);

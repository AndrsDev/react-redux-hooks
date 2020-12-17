import { User } from 'models/user';
import { useEffect, useState } from 'react';


function  useUsers(initialState: User[] = []) {
  const [ users, setUsers ] = useState<User[]>(initialState);
  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await response.json();
    setUsers(data);
  }

  return {
    users,
    fetchUsers,
  }
}


function App() {

  const { users, fetchUsers } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div className="margin">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) =>     
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;

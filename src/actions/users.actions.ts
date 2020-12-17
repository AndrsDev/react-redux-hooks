export const getAll = () => async (dispatch: any) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/')
  const users = await response.json();
  
  dispatch({
    type: 'set_users',
    payload: users
  })
}
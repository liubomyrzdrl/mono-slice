import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers} from './store/features/usersSlice'
// import './App.css';

const  App = () =>  {
  const { isLoading, users} = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
console.log(users);

  return (
    <div className="App">
      <h1>React Toolkit</h1>
      <>{ users?.map(item => <div>{item.name}</div>) }</>
    </div>
  );
}


export default App;

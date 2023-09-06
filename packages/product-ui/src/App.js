import { useEffect } from 'react';
import { UIButton } from 'uicomp';
import { fetchUsersOperation } from './store/reducers/usersOperation';
import { connect } from 'react-redux';

function App({ isLoading, users, error, dispatch, fetchUsersOperation, props }) {
  useEffect(() => {
    fetchUsersOperation();
  }, []);

  console.log('Props:', props);
  if (isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <div>
     <h1>Mono Repo</h1>
      <h1>Hello</h1>
    <>{ users?.map(item => <div>{item.name}</div>) }</>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("STATE", state);
  return {
    users: state.usersReducer?.users,
    isLoading: state.usersReducer?.isLoading,
    error: state.usersReducer?.error
  }
};

const mapDispatchToProps = { fetchUsersOperation };

export default connect(mapStateToProps, mapDispatchToProps)(App) ;

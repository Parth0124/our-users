import Spinner from '../layouts/Spinner';

const UserList = ({ users, handleUserClick, loading }) => {
  if (loading) {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      {users.map(user => (
        <div key={user.id} className="col-md-6">
          <div className="card mb-4 cursor-pointer" onClick={() => handleUserClick(user)}>
            <div className="card-body">
              <img src={user.avatar} alt={user.profile.username} className="rounded-circle mb-2" style={{ width: '80px', height: '80px' }} />
              <h5 className="card-title">{user.profile.username}</h5>
              <p className="card-text text-muted">{user.jobTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;

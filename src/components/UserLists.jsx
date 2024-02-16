import React, { useRef } from 'react';
import Spinner from '../layouts/Spinner';

// UserList.js
const UserList = ({ users, handleUserClick, loading }) => {
    const userListRef = useRef(null);
  
    const scrollToUserList = () => {
      if (userListRef.current) {
        userListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  
    if (loading) {
      return <Spinner />;
    }
  
    if (!users || !users.length) {
      return <Spinner />;
    }
  
    return (
      <div className="row" ref={userListRef}>
        {users.map(user => (
          <div key={user.id} className="col-md-6">
            <div className="card mb-4 cursor-pointer" onClick={() => { handleUserClick(user); scrollToUserList(); }}>
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
  
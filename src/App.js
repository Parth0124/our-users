// App.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserLists';
import UserDetails from './components/UserDetails';
import Navbar from './layouts/Navbar';
import About from './pages/AboutPage';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(response => {
        const sortedUsers = response.data.sort((a, b) => a.profile.username.localeCompare(b.profile.username));
        setUsers(sortedUsers);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="container py-4">
              <div className="row">
                <div className="col-md-6">
                  <UserList users={users} handleUserClick={handleUserClick} loading={loading} />
                </div>
                <div className="col-md-6">
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <UserDetails selectedUser={selectedUser} />
                  )}
                </div>
              </div>
            </div>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

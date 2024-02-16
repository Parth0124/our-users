import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Container, Grid } from '@mui/material'; // Assuming you're using Material UI
import UserList from './componenets/UserList'; // Assuming UserList component is in UserList.js

const UserDetails = ({ user }) => (
  <div>
    <h2>User Details</h2>
    {user ? (
      <div>
        <img src={user.avatar} alt={user.name} />
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Location: {user.location}</p>
      </div>
    ) : (
      <p>No user selected</p>
    )}
  </div>
);

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <Container>
      {loading ? (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
          <CircularProgress /> {/* Loader while fetching data */}
        </Grid>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <UserList users={users} onSelectUser={handleSelectUser} />
          </Grid>
          <Grid item xs={8}>
            <UserDetails user={selectedUser} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default App;

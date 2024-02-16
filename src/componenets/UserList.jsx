import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

const UserList = ({ users, onSelectUser }) => (
  <List>
    {users.map(user => (
      <ListItem button key={user.id} onClick={() => onSelectUser(user)}>
        <ListItemAvatar>
          <Avatar alt={user.name} src={user.avatar} sx={{ width: 50, height: 50, borderRadius: '50%' }} />
        </ListItemAvatar>
        <ListItemText primary={user.name} />
      </ListItem>
    ))}
  </List>
);

export default UserList;

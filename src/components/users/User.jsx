import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Chip,
  Avatar,
  Stack,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

// Mock data for users - replace with Redux data fetch
const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1-234-567-8901',
    department: 'Engineering',
    role: 'Admin',
    status: 'Active',
    joinDate: '2023-01-15',
    lastLogin: '2025-10-06',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1-234-567-8902',
    department: 'Marketing',
    role: 'User',
    status: 'Inactive',
    joinDate: '2023-05-20',
    lastLogin: '2025-09-01',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    phone: '+1-234-567-8903',
    department: 'Sales',
    role: 'Manager',
    status: 'Active',
    joinDate: '2022-11-10',
    lastLogin: '2025-10-07',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    phone: '+1-234-567-8904',
    department: 'HR',
    role: 'User',
    status: 'Active',
    joinDate: '2024-02-28',
    lastLogin: '2025-10-05',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
];

const User = () => {
  return (
    <Box sx={{ p: 3, bgcolor: 'background.default' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="text.primary">
          Users
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: '#6484C1',
            '&:hover': { bgcolor: '#5a76b0' },
          }}
        >
          Add User
        </Button>
      </Stack>

      <Paper elevation={2} sx={{ overflow: 'hidden' }}>
        <TableContainer sx={{ maxWidth: '100%', overflowX: 'auto' }}>
          <Table stickyHeader sx={{ minWidth: 1200 }}> {/* Set minWidth to force horizontal scroll */}
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Join Date</TableCell>
                <TableCell>Last Login</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell>
                    {/* <Avatar src={user.avatar} alt={user.name} sx={{ width: 40, height: 40 }} /> */}
                    <img src={user.avatar} alt={user.name} style={{width:40, height:40,borderRadius:"50%"}} />
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Chip
                      label={user.department}
                      size="small"
                      color="default"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={user.role}
                      size="small"
                      color={user.role === 'Admin' ? 'primary' : 'default'}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={user.status}
                      size="small"
                      color={user.status === 'Active' ? 'success' : 'error'}
                      variant="filled"
                    />
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell>
                    <IconButton size="small" color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default User;
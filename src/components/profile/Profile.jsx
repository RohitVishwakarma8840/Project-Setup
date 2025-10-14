import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Stack,
  Divider,
  Chip,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SecurityIcon from '@mui/icons-material/Security';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

// Mock data for current user profile - replace with Redux/auth data
const mockProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Admin',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  permissions: [
    { id: 1, name: 'View Users', allowed: true },
    { id: 2, name: 'Edit Users', allowed: true },
    { id: 3, name: 'Delete Users', allowed: false },
    { id: 4, name: 'Manage Permissions', allowed: true },
  ],
};

const Profile = () => {
  return (
    <Box sx={{ p: 3, bgcolor: 'background.default' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="text.primary">
          Profile & Permissions
        </Typography>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          sx={{
            bgcolor: '#6484C1',
            '&:hover': { bgcolor: '#5a76b0' },
          }}
        >
          Edit Profile
        </Button>
      </Stack>

      <Paper elevation={2} sx={{ p: 4, mb: 3 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
          <Avatar
            src={mockProfile.avatar}
            alt={mockProfile.name}
            sx={{ width: 120, height: 120, mx: 'auto' }}
          />
          <Stack spacing={2} flex={1}>
            <Typography variant="h5" fontWeight="bold">{mockProfile.name}</Typography>
            <Stack direction="row" spacing={2}>
              <Chip
                icon={<PersonIcon />}
                label={mockProfile.role}
                color="primary"
                variant="outlined"
              />
              <Chip
                icon={<EmailIcon />}
                label={mockProfile.email}
                color="default"
                variant="outlined"
              />
            </Stack>
          </Stack>
        </Stack>
      </Paper>

      <Paper elevation={2} sx={{ overflow: 'hidden' }}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="bold" mb={2} color="text.primary">
            Permissions
          </Typography>
          <List>
            {mockProfile.permissions.map((perm) => (
              <ListItem key={perm.id} disablePadding>
                <ListItemIcon>
                  {perm.allowed ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />}
                </ListItemIcon>
                <ListItemText
                  primary={perm.name}
                  secondary={perm.allowed ? 'Allowed' : 'Denied'}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
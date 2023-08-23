import { FlutterDashOutlined, Mail, AccountCircle } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Typography, Badge, Button } from '@mui/material';
import React from 'react';

const Header = () => {
    return (
        <AppBar position="sticky" sx={{ mb: '15px' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FlutterDashOutlined />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Social Network
          </Typography>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
};

export default Header;
import React from 'react';
import './App.css';
import { AppBar, Button, Container, Toolbar, Typography, IconButton, Badge, Grid } from '@mui/material';
import { AccountCircle, FlutterDashOutlined, Mail, Settings } from '@mui/icons-material';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Profile } from './components/Profile/Profile';
import { Messages } from './components/Messages/Messages';


function App() {

  return (
    <div className="App">
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
      <Container sx={{
        backgroundColor: '#edeef0',
        borderRadius: '5px'
      }}>
        <Grid container columnSpacing={2} rowSpacing={1} height={'100vh'}>
          <Grid item xs={3}>
            <Navbar />
          </Grid>
          <Grid item xs={9}>
            <Routes>
              <Route index element={<Profile/>} />
              <Route path={'/profile'} element={<Profile/>} />
              <Route path={'/messages'} element={<Messages/>} />
              <Route path={'/settings'} element={<Settings/>} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

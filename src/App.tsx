import React from 'react';
import './App.css';
import { Container, Grid } from '@mui/material';
import { Navbar } from './components/Navbar/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Profile } from './components/Profile/Profile';
import { Messages } from './components/Messages/Messages';
import Music from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import Header from './components/Header/Header';
import { News } from './components/News/News';


function App() {

  return (
    <div className="App">
      <Header />
      <Container sx={{
        backgroundColor: '#edeef0',
        borderRadius: '5px'
      }}>
        <Grid container columnSpacing={2} rowSpacing={1} height={'90vh'}>
          <Grid item xs={2} minWidth={'140px'}>
            <Navbar />
          </Grid>
          <Grid item xs={10} >
            <Routes>
              <Route index element={<Navigate to={'/profile'} />} />
              <Route path={'/profile'} element={<Profile />} />
              <Route path={'/messages/*'} element={<Messages />} >
                {/* <Route index element={<Navigate to={'/messages/dimich'} />}/>
                <Route path={'/messages/*'} element={<Messages />} /> */}
              </Route>
              <Route path={'/news'} element={<News />} />
              <Route path={'/music'} element={<Music />} />
              <Route path={'/settings'} element={<Settings />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

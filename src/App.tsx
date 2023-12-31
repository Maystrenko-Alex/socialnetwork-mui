import './App.css';
import { Container, Grid } from '@mui/material';
import { Navbar } from './components/Navbar/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MusicContainer } from './components/Music/Music';
import { SettingsContainer } from './components/Settings/Settings';
import { NewsContainer } from './components/News/News';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Login } from './components/Login/Login';
import HeaderContainer from './components/Header/HeaderContainer';


function App() {

  return (
    <div className="App">
      <HeaderContainer />
      <Container sx={{ backgroundColor: '#edeef0', borderRadius: '5px' }}>
        <Grid container columnSpacing={2} rowSpacing={1} height={'90vh'}>
          <Grid item xs={2} minWidth={'140px'}>
            <Navbar />
          </Grid>
          <Grid item xs={10} >
            <Routes>
              <Route index element={<Navigate to={'/profile'} />} />

              {/* <Route index  element={<ProfileContainer/>} /> */}
              <Route path={'/login'} element={<Login />} />
              <Route path={'/profile/*'} element={(<ProfileContainer />)} />
              <Route path={'/profile/:userId'} element={<ProfileContainer />} />
              <Route path={'/messages/*'} element={<MessagesContainer />} />
              <Route path={'/users'} element={<UsersContainer />} />
              <Route path={'/news'} element={<NewsContainer />} />
              <Route path={'/music'} element={<MusicContainer />} />
              <Route path={'/settings'} element={<SettingsContainer />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

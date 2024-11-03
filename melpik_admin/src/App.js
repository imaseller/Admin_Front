// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <div className='App'>
          <header className='App-header'>
            <Routes>
              <Route path='/admin/auth/login' element={<AdminLogin />} />
            </Routes>
          </header>
          ㄴ
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;

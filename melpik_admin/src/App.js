import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';

const AdminLogin = React.lazy(() => import('./pages/AdminLogin'));

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <GlobalStyle />
        <div className='App'>
          <header className='App-header'>
            <Suspense fallback={<LoadingMessage>로딩 중...</LoadingMessage>}>
              <Routes>
                {/* Redirect from '/' to '/admin/auth/login' */}
                <Route
                  path='/'
                  element={<Navigate to='/admin/auth/login' replace />}
                />
                <Route path='/admin/auth/login' element={<AdminLogin />} />
              </Routes>
            </Suspense>
          </header>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

const LoadingMessage = styled.div`
  color: yellow;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

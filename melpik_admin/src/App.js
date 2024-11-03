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
import Loading from './components/Loading';
import lazyLoad from './pages/lazyLode.js';

const AdminLogin = React.lazy(() => import('./pages/AdminLogin'));
import ManagerList from '../src/components/Admin/ManagerList.js';
import ManagerDetail from '../src/components/Member/MemberDetail.js';
import BlockManagerList from '../src/components/Member/BlockMemberList.js';
import MemberList from '../src/components/Member/MemberList.js';
import MemberDetail from '../src/components/Member/MemberDetail.js';
import BlockMemberList from '../src/components/Member/BlockMemberList.js';
import ReviewList from '../src/components/Member/ReviewList';
import ReviewDetail from '../src/components/Member/ReviewDetail.js';
import ProductList from '../src/components/Service/ProductList.js';
import ProductDetail from '../src/components/Service/ProductDetail.js';

const List = lazyLoad(() => import('./pages/List'));
const renderWithLayout = (Component) => <Component />;

function App() {
  const renderWithLayout = (Component) => (
    <Suspense fallback={<Loading />}>
      <List>
        <Component />
      </List>
    </Suspense>
  );
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <GlobalStyle />
        <div className='App'>
          <header className='App-header'>
            <Suspense fallback={<LoadingMessage>로딩 중...</LoadingMessage>}>
              <Routes>
                <Route
                  path='/'
                  element={<Navigate to='/admin/auth/login' replace />}
                />
                <Route path='/admin/auth/login' element={<AdminLogin />} />
                <Route path='/admin' element={renderWithLayout(ManagerList)} />
                <Route
                  path='/admin/:id'
                  element={renderWithLayout(ManagerDetail)}
                />
                <Route
                  path='/blockmanagerlist'
                  element={renderWithLayout(BlockManagerList)}
                />
                <Route path='/user' element={renderWithLayout(MemberList)} />
                <Route
                  path='/user/detail/:seq'
                  element={renderWithLayout(MemberDetail)}
                />
                <Route
                  path='/user/blocked'
                  element={renderWithLayout(BlockMemberList)}
                />
                <Route
                  path='/reviewlist'
                  element={renderWithLayout(ReviewList)}
                />
                <Route
                  path='/reviewlist/detail/:no'
                  element={renderWithLayout(ReviewDetail)}
                />
                <Route
                  path='/productlist'
                  element={renderWithLayout(ProductList)}
                />
                <Route
                  path='/productlist/detail/:id'
                  element={renderWithLayout(ProductDetail)}
                />
              </Routes>
            </Suspense>
          </header>
        </div>
      </Router>
    </ThemeProvider>
  );
}

const LoadingMessage = styled.div`
  color: yellow;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

// Ensure App is exported
export default App;

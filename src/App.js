import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import HeaderContainer from './components/common/HeaderContainer';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>React Blog</title>
      </Helmet>
      <HeaderContainer />
      <Route path={['/', '/@:username']} exact component={PostListPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/write" component={WritePage} />
      <Route path="/@:username/:postId" component={PostPage} />
    </>
  );
}

export default App;

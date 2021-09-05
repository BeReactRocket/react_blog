import qs from 'qs';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Pagination from '../../components/posts/Pagination';

const PaginationContainer = ({ location, match }) => {
  const { posts, lastPage, loading } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    lastPage: posts.lastPage,
    loading: loading['posts/LIST_POSTS'],
  }));

  if (!posts || loading) return null;

  const { username } = match.params;

  const { tag, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      page={parseInt(page, 10)}
      tag={tag}
      lastPage={lastPage}
      username={username}
    />
  );
};

export default withRouter(PaginationContainer);

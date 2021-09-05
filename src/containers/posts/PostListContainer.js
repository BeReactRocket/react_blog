import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../../redux/modules/posts';
import qs from 'qs';
import PostList from '../../components/posts/PostList';
import { withRouter } from 'react-router';

const PostListContainer = ({ match, location }) => {
  const { posts, postsError, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      postsError: posts.postsError,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const { username } = match.params;
    const { page, tag } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    dispatch(listPosts({ page, username, tag }));
  }, [dispatch, location.search, match.params]);

  return (
    <PostList
      posts={posts}
      loading={loading}
      error={postsError}
      showWriteButton={user}
    />
  );
};

export default withRouter(PostListContainer);

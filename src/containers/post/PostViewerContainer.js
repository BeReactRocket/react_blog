import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import PostViewer from '../../components/post/PostViewer';
import { readPost, unloadPost } from '../../redux/modules/post';

const PostViewerContainer = ({ match }) => {
  const { postId } = match.params;
  const { post, loading, error } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.postError,
    loading: loading['post/READ_POST'],
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [postId, dispatch]);

  return <PostViewer post={post} loading={loading} error={error} />;
};

export default withRouter(PostViewerContainer);

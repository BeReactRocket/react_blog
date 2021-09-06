import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import PostActionButtons from '../../components/post/PostActionButtons';
import PostViewer from '../../components/post/PostViewer';
import { removePost } from '../../lib/api/posts';
import { readPost, unloadPost } from '../../redux/modules/post';
import { setOriginalPost } from '../../redux/modules/write';

const PostViewerContainer = ({ match, history }) => {
  const { postId } = match.params;
  const { post, loading, error, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.postError,
      loading: loading['post/READ_POST'],
      user: user.user,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [postId, dispatch]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    history.push('/write');
  };

  const onRemove = async () => {
    try {
      await removePost(postId);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const ownPost = (user && user._id) === (post && post.user._id);

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={
        ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default withRouter(PostViewerContainer);

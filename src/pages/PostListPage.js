import PaginationContainer from '../containers/posts/PaginationContainer';
import PostListContainer from '../containers/posts/PostListContainer';

const PostListPage = () => {
  return (
    <>
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;

import Article from "./Article";
// eslint-disable-next-line react/prop-types
function ArticleList({ posts }) {
  return (
    <main>
      {/* eslint-disable-next-line react/prop-types */}
      {posts.map((post) => (
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
      ))}
    </main>
  );
}
export default ArticleList;

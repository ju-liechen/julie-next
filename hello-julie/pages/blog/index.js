import Link from 'next/link';

function BlogPostList() {
  return (
    <>
      <h2>Blog Post 1</h2>
      <h2>Blog Post 2</h2>
      <h2>Blog Post 3</h2>

      <Link href='/' legacyBehavior>
        <a>Home</a>
      </Link>
    </>
  );
}

export default BlogPostList;

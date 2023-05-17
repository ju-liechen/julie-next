import Link from 'next/link';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Creating your post...');
    router.push('/blog');
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/blog' legacyBehavior>
        <a>Blog</a>
      </Link>
      <button onClick={handleClick}>Create Blog Post</button>
    </div>
  );
}

export default Home;

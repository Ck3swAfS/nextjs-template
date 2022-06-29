import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session && session.user) {
    router.push('/');
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => router.push('/api/auth/signin')}>Sign in</button>
    </>
  );
};

export default Home;

import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className=' w-96 h-full bg-gray-900 p-20 rounded-xl shadow-2xl text-white'>
        <h2 className='text-3xl'>Welcome!</h2>
        <h4>{session?.user?.name}</h4>
      </div>
    </div>
  );
};

export default Home;

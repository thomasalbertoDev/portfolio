/* eslint-disable react/no-unescaped-entities */
import Layouts from '@/app/layouts/Layouts';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container">
      <Layouts>
        <h1 className='font-bold text-4xl'>Hey, I'm Thomas Alberto!</h1>
      </Layouts>
    </main>
  );
}

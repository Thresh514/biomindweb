import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Biomind Homepage</title>
        <meta name="description" content="A platform for educational resources." />
      </Head>
      <Navbar/>
      <main className="pt-32">
        <h2 className="text-3xl text-darker font-semibold text-center mt-4 mb-4">Feature Resource</h2>
        <p className="text-center">This block is under construction</p>
      </main>

      <Footer/>
    </div>
  );
}
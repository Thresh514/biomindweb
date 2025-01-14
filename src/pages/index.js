import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResourceCard from '../components/ResourceCard';


export default function Home() {

  return (
    <div>
      <Head>
        <title>Biomind Homepage</title>
        <meta name="description" content="A platform for educational resources." />
      </Head>
      <Header/>
      <Navbar/>
      <main className="pt-32">
        <ResourceCard/>
      </main>

      <Footer/>
    </div>
  );
}
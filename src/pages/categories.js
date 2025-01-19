import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ResourcePage from '../components/ResourcePage';
import Footer from '../components/Footer';

export default function Home() {

    return (
        <div>
        <Head>
            <title>Browse Resource</title>
            <meta name="description" content="Catagory" />
        </Head>
        <Header/>
        <div className='fixed top-20 left-0 right-0 z-50'><Navbar/></div>
        <main className="pt-48 flex flex-col space-y-8">
            <h1 className="ml-48 text-4xl text-darker font-bold">Explore All Resources...</h1>
            <ResourcePage/> 
        </main>
        <div className='fixed bottom-0'><Footer/></div>
        </div>
        )}
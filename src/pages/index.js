import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/Herosection';
import ResourceCard from '../components/ResourceCard';
import MembershipBenefits from '../components/MembershipBenefits';
import SuccessStories from '../components/SuccessStories';


export default function Home() {

  return (
    <div>
      <Head>
        <title>Biomind Homepage</title>
        <meta name="description" content="A platform for educational resources." />
      </Head>
      <Header/>
      <Navbar/>
      <main className="pt-16 flex flex-col items-center justify-center">
        <HeroSection/>
        <ResourceCard />
        <div className="mt-32 mb-32">
          <MembershipBenefits/>
          <SuccessStories/>
        </div>

      </main>

      <Footer/>
    </div>
  );
}
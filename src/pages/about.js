import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
    return (
    <div>
        <Navbar />
        <main className="pt-32">
        <h1 className="text-center text-5xl font-bold text-darker mt-8 mb-8">
            About
        </h1>
        <p className="text-center text-gray-600 mt-4">This page is under construction......</p>
        </main>
        <Footer />
    </div>
    );
}
